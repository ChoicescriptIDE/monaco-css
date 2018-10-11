/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
import { Parser } from './parser/cssParser';
import { CSSCompletion } from './services/cssCompletion';
import { CSSHover } from './services/cssHover';
import { CSSNavigation } from './services/cssNavigation';
import { CSSpellCheck } from './services/CSSpellCheck';
export * from './cssLanguageTypes';
export * from './_deps/vscode-languageserver-types/main';
function createFacade(parser, completion, hover, navigation, spellcheck) {
    return {
        configure: spellcheck.configure.bind(spellcheck),
        doSpellCheck: spellcheck.doSpellCheck.bind(spellcheck),
        parseStylesheet: parser.parseStylesheet.bind(parser),
        doComplete: completion.doComplete.bind(completion),
        setCompletionParticipants: completion.setCompletionParticipants.bind(completion),
        doHover: hover.doHover.bind(hover),
        findDefinition: navigation.findDefinition.bind(navigation),
        findReferences: navigation.findReferences.bind(navigation),
        findDocumentHighlights: navigation.findDocumentHighlights.bind(navigation),
        findDocumentLinks: navigation.findDocumentLinks.bind(navigation),
        findDocumentSymbols: navigation.findDocumentSymbols.bind(navigation),
        findColorSymbols: function (d, s) { return navigation.findDocumentColors(d, s).map(function (s) { return s.range; }); },
        findDocumentColors: navigation.findDocumentColors.bind(navigation),
        getColorPresentations: navigation.getColorPresentations.bind(navigation),
        doRename: navigation.doRename.bind(navigation),
    };
}
export function getCSSLanguageService() {
    return createFacade(new Parser(), new CSSCompletion(), new CSSHover(), new CSSNavigation(), new CSSpellCheck());
}
//# sourceMappingURL=cssLanguageService.js.map