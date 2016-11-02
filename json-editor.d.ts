export declare class JSONEditor {
    constructor(element: HTMLElement, options?: JSONEditorOptions);

    static defaults;
}

/**
 * This interface describes the options for the JSONEditor.
 */
export interface JSONEditorOptions{
    /**
     * If true, JSON Editor will load external URLs in $ref via ajax.
     */
    ajax?:boolean,

    /**
     * If true, remove all "add row" buttons from arrays.
     */
    disable_array_add?:boolean,

    /**
     * If true, remove all "delete row" buttons from arrays.
     */
    disable_array_delete?:boolean,

    /**
     * If true, remove all "move up" and "move down" buttons from arrays.
     */
    disable_array_reorder?: boolean,

    /**
     * If true, remove all collapse buttons from objects and arrays.
     */
    disable_collapse?:boolean;

    /**
     * If true, remove all Edit JSON buttons from objects.
     */
    disable_edit_json?:boolean;

    /**
     * If true, remove all Edit Properties buttons from objects.
     */
    disable_properties?:boolean;

    /**
     * The first part of the `name` attribute of form inputs in the editor. An full example name is `root[person][name]` where "root" is the form_name_root.
     */
    form_name_root?:string;

    /**
     * The icon library to use for the editor. See the CSS Integration section below for more info.
     */
    iconlib?:string;

    /**
     * If true, objects can only contain properties defined with the properties keyword.
     */
    no_additional_properties?:boolean;

    /**
     * An object containing schema definitions for URLs. Allows you to pre-define external schemas.
     */
    refs?:any;

    /**
     * If true, all schemas that don't explicitly set the required property will be required.
     */
    required_by_default?:boolean;

    /**
     * If true, makes oneOf copy properties over when switching.
     */
    keep_oneof_values?:boolean;

    /**
     * A valid JSON Schema to use for the editor. Version 3 and Version 4 of the draft specification are supported.
     */
    schema?:any;

    /**
     * When to show validation errors in the UI. Valid values are interaction, change, always, and never.
     */
    show_errors?:string;

    /**
     * Seed the editor with an initial value. This should be valid against the editor's schema.
     */
    startval?:any;

    /**
     * The JS template engine to use. See the Templates and Variables section at https://github.com/jdorn/json-editor for more info.
     */
    template?:string;

    /**
     * The CSS theme to use. See the CSS Integration section below for more info.
     */
    theme?:string;

    /**
     * If true, only required properties will be included by default.
     */
    display_required_only?:boolean;
}