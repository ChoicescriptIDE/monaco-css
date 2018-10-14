/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
import * as nodes from '../parser/cssNodes';
import { Range, DiagnosticSeverity } from './../_deps/vscode-languageserver-types/main';
import { Rules } from './textRules';
import { SpellCheckVisitor } from './spellcheck';
import { Typo } from './typo/typo';
var ChoiceScriptValidation = /** @class */ (function () {
    function ChoiceScriptValidation() {
        this.typo = new Typo("", "", "", {
            platform: 'any'
        });
    }
    ChoiceScriptValidation.prototype.configure = function (settings) {
        this.settings = settings;
        // Reload typo here rather than every time we call a visitor.
        if (settings.spellCheckSettings.rootPath) {
            this.loadTypo(settings);
        }
    };
    ChoiceScriptValidation.prototype.loadTypo = function (settings) {
        var baseUrl = this.settings.spellCheckSettings.rootPath;
        var dict = this.settings.spellCheckSettings.dictionary;
        this.typo = new Typo(dict, this.typo._readFile(baseUrl + dict + "/" + dict + ".aff"), this.typo._readFile(baseUrl + dict + "/" + dict + ".dic"), {
            platform: 'any'
        });
    };
    ChoiceScriptValidation.prototype.doValidation = function (document, stylesheet, settings) {
        if (settings === void 0) { settings = this.settings; }
        if (settings && settings.validate === false) {
            return [];
        }
        var entries = [];
        entries.push.apply(entries, nodes.ParseErrorCollector.entries(stylesheet));
        if (settings && settings.spellCheckSettings.enabled === true) {
            // Treat uninitialized rootPath as disabled.
            if (settings.spellCheckSettings.rootPath) {
                entries.push.apply(entries, SpellCheckVisitor.entries(stylesheet, document, null, (nodes.Level.Warning | nodes.Level.Error), this.typo));
            }
        }
        var ruleIds = [];
        for (var r in Rules) {
            ruleIds.push(Rules[r].id);
        }
        function toDiagnostic(marker) {
            var range = Range.create(document.positionAt(marker.getOffset()), document.positionAt(marker.getOffset() + marker.getLength()));
            var source = ruleIds.indexOf(marker.getRule().id) !== -1
                ? document.languageId + ".lint." + marker.getRule().id
                : document.languageId;
            return {
                code: marker.getRule().id,
                source: source,
                message: marker.getMessage(),
                severity: marker.getLevel() === nodes.Level.Warning ? DiagnosticSeverity.Warning : DiagnosticSeverity.Error,
                range: range
            };
        }
        return entries.filter(function (entry) { return entry.getLevel() !== nodes.Level.Ignore; }).map(toDiagnostic);
    };
    return ChoiceScriptValidation;
}());
export { ChoiceScriptValidation };
//# sourceMappingURL=ChoiceScriptValidation.js.map