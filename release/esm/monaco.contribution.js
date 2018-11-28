/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var Emitter = monaco.Emitter;
// --- CSS configuration and defaults ---------
var LanguageServiceDefaultsImpl = /** @class */ (function () {
    function LanguageServiceDefaultsImpl(languageId, diagnosticsOptions) {
        this._onDidChange = new Emitter();
        this._languageId = languageId;
        this.setDiagnosticsOptions(diagnosticsOptions);
    }
    Object.defineProperty(LanguageServiceDefaultsImpl.prototype, "onDidChange", {
        get: function () {
            return this._onDidChange.event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageServiceDefaultsImpl.prototype, "languageId", {
        get: function () {
            return this._languageId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageServiceDefaultsImpl.prototype, "diagnosticsOptions", {
        get: function () {
            return this._diagnosticsOptions;
        },
        enumerable: true,
        configurable: true
    });
    LanguageServiceDefaultsImpl.prototype.setDiagnosticsOptions = function (options) {
        this._diagnosticsOptions = options || Object.create(null);
        this._onDidChange.fire(this);
    };
    return LanguageServiceDefaultsImpl;
}());
export { LanguageServiceDefaultsImpl };
var diagnosticDefault = {
    // Generally try to disable things by default
    // when we're using CSIDE but enable otherwise
    // for ease of testing.
    validate: (typeof window.cside !== "undefined") ? false : true,
    spellCheckSettings: {
        rootPath: (typeof window.cside !== "undefined") ? "" : "https://raw.githubusercontent.com/ChoicescriptIDE/main/latest/source/lib/typo/dictionaries/",
        enabled: (typeof window.cside !== "undefined") ? false : true,
        dictionary: "en_US"
    },
    lint: {
        compatibleVendorPrefixes: 'ignore',
        vendorPrefix: 'warning',
        duplicateProperties: 'warning',
        emptyRules: 'warning',
        importStatement: 'ignore',
        boxModel: 'ignore',
        universalSelector: 'ignore',
        zeroUnits: 'ignore',
        fontFaceProperties: 'warning',
        hexColorLength: 'error',
        argumentsInColorFunction: 'error',
        unknownProperties: 'warning',
        ieHack: 'ignore',
        unknownVendorSpecificProperties: 'ignore',
        propertyIgnoredDueToDisplay: 'warning',
        important: 'ignore',
        float: 'ignore',
        idSelector: 'ignore'
    }
};
var choicescriptDefaults = new LanguageServiceDefaultsImpl('choicescript', diagnosticDefault);
// Export API
function createAPI() {
    return {
        choicescriptDefaults: choicescriptDefaults,
    };
}
monaco.languages.choicescript = createAPI();
// --- Registration to monaco editor ---
function getMode() {
    return monaco.Promise.wrap(import('./choicescriptMode'));
}
monaco.languages.onLanguage('choicescript', function () {
    getMode().then(function (mode) { return mode.setupMode(choicescriptDefaults); });
});