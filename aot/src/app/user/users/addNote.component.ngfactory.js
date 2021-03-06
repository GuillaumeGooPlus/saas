/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from './user.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '../../../../../src/app/user/users/addNote.component';
import * as import3 from '@angular/forms';
import * as import4 from '@angular/common';
import * as import5 from '../../../../../src/app/user/user.service';
import * as import6 from 'ng2-toastr/src/toast-manager';
import * as import7 from '@angular/router';
var styles_AddNoteComponent = [import0.styles];
export var RenderType_AddNoteComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_AddNoteComponent,
    data: {}
});
export function View_AddNoteComponent_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 41, 'div', [[
                'class',
                'container'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'goldgradient beigeborder subnav'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'button', [[
                'class',
                'subnav-btnleft'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.goBack() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import1.ɵeld(0, null, null, 0, 'i', [[
                'class',
                'fa fa-chevron-left'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'h3', [[
                'style',
                'text-align: center;'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Add Note'])),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵeld(0, null, null, 29, 'div', [[
                'class',
                'single-wrpr beigeback'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 26, 'form', [[
                'novalidate',
                ''
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'ngSubmit'
            ],
            [
                null,
                'submit'
            ],
            [
                null,
                'reset'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('submit' === en)) {
                var pd_0 = (import1.ɵnov(v, 15).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (import1.ɵnov(v, 15).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (co.save(co.myForm, co.myForm.valid) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(8192, null, 0, import3.ɵbf, [], null, null),
        import1.ɵdid(270336, null, 0, import3.FormGroupDirective, [
            [
                8,
                null
            ],
            [
                8,
                null
            ]
        ], { form: [
                0,
                'form'
            ]
        }, { ngSubmit: 'ngSubmit' }),
        import1.ɵprd(1024, null, import3.ControlContainer, null, [import3.FormGroupDirective]),
        import1.ɵdid(8192, null, 0, import3.NgControlStatusGroup, [import3.ControlContainer], null, null),
        (l()(), import1.ɵted(null, ['\n      '])),
        (l()(), import1.ɵeld(0, null, null, 11, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 5, 'textarea', [
            [
                'class',
                'form-control lng-form'
            ],
            [
                'formControlName',
                'newTextNote'
            ],
            [
                'placeholder',
                'Add Note Here...'
            ],
            [
                'type',
                'textarea'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('input' === en)) {
                var pd_0 = (import1.ɵnov(v, 22)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (import1.ɵnov(v, 22).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (import1.ɵnov(v, 22)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (import1.ɵnov(v, 22)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.newTextNote = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(8192, null, 0, import3.DefaultValueAccessor, [
            import1.Renderer,
            import1.ElementRef,
            [
                2,
                import3.COMPOSITION_BUFFER_MODE
            ]
        ], null, null),
        import1.ɵprd(512, null, import3.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [import3.DefaultValueAccessor]),
        import1.ɵdid(335872, null, 0, import3.FormControlName, [
            [
                3,
                import3.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                import3.NG_VALUE_ACCESSOR
            ]
        ], {
            name: [
                0,
                'name'
            ],
            model: [
                1,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        import1.ɵprd(1024, null, import3.NgControl, null, [import3.FormControlName]),
        import1.ɵdid(8192, null, 0, import3.NgControlStatus, [import3.NgControl], null, null),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 0, 'small', [[
                'class',
                'text-danger'
            ]
        ], [[
                8,
                'hidden',
                0
            ]
        ], null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n      '])),
        (l()(), import1.ɵted(null, ['\n      '])),
        (l()(), import1.ɵeld(0, null, null, 6, 'div', [[
                'class',
                'valid-edit'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 3, 'button', [[
                'type',
                'submit'
            ]
        ], [[
                8,
                'disabled',
                0
            ]
        ], null, null, null, null)),
        import1.ɵdid(139264, null, 0, import4.NgClass, [
            import1.IterableDiffers,
            import1.KeyValueDiffers,
            import1.ElementRef,
            import1.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        import1.ɵpod([
            'done',
            'pas-done'
        ]),
        (l()(), import1.ɵted(null, ['Done'])),
        (l()(), import1.ɵted(null, ['\n      '])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_7 = co.myForm;
        ck(v, 15, 0, currVal_7);
        var currVal_15 = 'newTextNote';
        var currVal_16 = co.newTextNote;
        ck(v, 24, 0, currVal_15, currVal_16);
        var currVal_19 = ck(v, 36, 0, co.myForm.valid, !co.myForm.valid);
        ck(v, 35, 0, currVal_19);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = import1.ɵnov(v, 17).ngClassUntouched;
        var currVal_1 = import1.ɵnov(v, 17).ngClassTouched;
        var currVal_2 = import1.ɵnov(v, 17).ngClassPristine;
        var currVal_3 = import1.ɵnov(v, 17).ngClassDirty;
        var currVal_4 = import1.ɵnov(v, 17).ngClassValid;
        var currVal_5 = import1.ɵnov(v, 17).ngClassInvalid;
        var currVal_6 = import1.ɵnov(v, 17).ngClassPending;
        ck(v, 13, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = import1.ɵnov(v, 26).ngClassUntouched;
        var currVal_9 = import1.ɵnov(v, 26).ngClassTouched;
        var currVal_10 = import1.ɵnov(v, 26).ngClassPristine;
        var currVal_11 = import1.ɵnov(v, 26).ngClassDirty;
        var currVal_12 = import1.ɵnov(v, 26).ngClassValid;
        var currVal_13 = import1.ɵnov(v, 26).ngClassInvalid;
        var currVal_14 = import1.ɵnov(v, 26).ngClassPending;
        ck(v, 21, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
        var currVal_17 = co.myForm.get('newTextNote').valid;
        ck(v, 29, 0, currVal_17);
        var currVal_18 = !co.myForm.valid;
        ck(v, 34, 0, currVal_18);
    });
}
function View_AddNoteComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'app-users', [], null, null, null, View_AddNoteComponent_0, RenderType_AddNoteComponent)),
        import1.ɵdid(57344, null, 0, import2.AddNoteComponent, [
            import5.UserService,
            import6.ToastsManager,
            import7.Router,
            import4.Location,
            import7.ActivatedRoute,
            import3.FormBuilder
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var AddNoteComponentNgFactory = import1.ɵccf('app-users', import2.AddNoteComponent, View_AddNoteComponent_Host_0, {}, {}, []);
//# sourceMappingURL=addNote.component.ngfactory.js.map