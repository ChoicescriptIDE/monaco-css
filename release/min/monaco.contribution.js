/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-css version: 2.2.0(ba20f0f49802da46b73b65bf178e3b488bbbd32f)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-css/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/language/choicescript/monaco.contribution",["require","exports"],function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=monaco.Emitter,n=function(){function e(e,n){this._onDidChange=new o,this._languageId=e,this.setDiagnosticsOptions(n)}return Object.defineProperty(e.prototype,"onDidChange",{get:function(){return this._onDidChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"diagnosticsOptions",{get:function(){return this._diagnosticsOptions},enumerable:!0,configurable:!0}),e.prototype.setDiagnosticsOptions=function(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(this)},e}(),t=new(e.LanguageServiceDefaultsImpl=n)("choicescript",{validate:void 0===window.cside,spellCheckSettings:{rootPath:void 0!==window.cside?"":"https://raw.githubusercontent.com/ChoicescriptIDE/main/latest/source/lib/typo/dictionaries/",enabled:void 0===window.cside,dictionary:"en_US"},lint:{compatibleVendorPrefixes:"ignore",vendorPrefix:"warning",duplicateProperties:"warning",emptyRules:"warning",importStatement:"ignore",boxModel:"ignore",universalSelector:"ignore",zeroUnits:"ignore",fontFaceProperties:"warning",hexColorLength:"error",argumentsInColorFunction:"error",unknownProperties:"warning",ieHack:"ignore",unknownVendorSpecificProperties:"ignore",propertyIgnoredDueToDisplay:"warning",important:"ignore",float:"ignore",idSelector:"ignore"}});monaco.languages.choicescript={choicescriptDefaults:t},monaco.languages.onLanguage("choicescript",function(){monaco.Promise.wrap(new Promise(function(e,n){i(["./choicescriptMode"],e,n)})).then(function(e){return e.setupMode(t)})})});