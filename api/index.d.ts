declare module "RaycastDebug" {
    /**
     * Indicates whether the execution environment is Raycast or the web browser (for debugging).
     * @category Debugging
     * @internal
     */
    export const runsInRaycast: boolean;
    /**
     * Logs the passed arguments to the OS and browser console.
     *
     * On macOS, the log output can be viewed in the OS console (`/Applications/Utilities/Console.app`, subsystem: `com.raycast.commands`),
     * and the Safari browser console (`Safari > Develop` menu, activated via `Safari Settings > Advanced`).
     * Tip: Turn on "Automatically Show Web Inspector..." under `Safari > Develop` to automatically show the console when you open your command in Raycast.
     * @category Debugging
     */
    export function log(level: LogLevel, ...msg: unknown[]): void;
    /**
     * Convenience logging function that logs the output with {@link LogLevel} `Debug`
     * @category Debugging
     */
    export function debug(...msg: unknown[]): void;
    /**
     * Convenience logging function that logs the output with {@link LogLevel} `Info`
     * @category Debugging
     */
    export function info(...msg: unknown[]): void;
    /**
     * Convenience logging function that logs the output with {@link LogLevel} `Warn`
     * @category Debugging
     */
    export function warn(...msg: unknown[]): void;
    /**
     * Convenience logging function that logs the output with {@link LogLevel} `Error`
     * @category Debugging
     */
    export function error(...msg: unknown[]): void;
    /**
     * Convenience logging function that can be used with `catch` handlers of Promises.
     * @category Debugging
     * @example
     * ```
     * new Promise(...).catch(logPromiseError);
     * ```
     */
    export function logPromiseError<T>(value: T): Promise<T>;
    /**
     * Log level displayed in console output, used be the {@link log} function and automatically set by convenience functions such as {@link debug}
     * @category Debugging
     */
    export enum LogLevel {
        Debug = "debug",
        Info = "info",
        Warn = "warn",
        Error = "error"
    }
}
declare module "RaycastSupport" {
    /**
     * Result union type used by async. code to indicate success/failure status of an operation.
     * @category Support
     */
    export type Result<T> = {
        success: true;
        value?: T;
    } | {
        success: false;
        error?: string;
    };
    /**
     * Convenience function that returns a new Promise that catches and logs errors.
     * @category Support
     */
    export function promise<T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;
}
declare module "RaycastBridge" {
    /**
     * The bridge is used to communicate back and forth between the JSVM running in Raycast and the command.
     * All methods here are internal and not exported via the main .ts export file.
     */
    import { Result } from "RaycastSupport";
    /**
     * Central dispatcher method that calls into Raycast.
     *
     * @internal
     * @remarks
     * The completion handler runs when the call has been executed by Raycast.
     * The callback handler is used to establish a "notification channel" for events that are performed later.
     * The lifetime of a callback can be set to `once`, meaning that Raycast removes the callback after its
     * execution, or `keepAlive` for storing the callback until the same method is called again.
     * `CallbackInfo` maps a custom callback type/id to a lifetime mode, i.e. multiple "events" with different
     * lifetimes could be dispatched through the same callback function.
     * Pass an empty object as `CallbackInfo` when the callback types should be dynamic and in mode `keepAlive`.
     */
    export function callRaycast(namespace: Namespace, method: Method, args: Arguments, callback?: Callback, callbackInfo?: CallbackInfo, completion?: Completion): void;
    /**
     * Convenience function for calling into Raycast.
     * Uses an error logging Promise instead of a completion callback.
     * @internal
     */
    export function raycastPromise<T>(namespace: Namespace, method: Method, args: Arguments, callback?: Callback, callbackInfo?: CallbackInfo): Promise<T>;
    /**
     * Supporting Bridge Parameter Types
     */
    export type Namespace = "debug" | "ui" | "net" | "app";
    export type Method = "log" | "render" | "resumeHTTPRequest" | "cancelHTTPRequest" | "open" | "setClipboardContents" | "clearClipboardContents" | "setTimeout" | "clearTimeout" | "allLocalStorageItems" | "getLocalStorageItem" | "setLocalStorageItem" | "removeLocalStorageItem" | "clearLocalStorage" | "showToast" | "hideToast" | "changeToast";
    export type Arguments = Record<string | number | symbol, unknown>;
    export type Callback = (result: Result<CallbackResult>) => unknown;
    export type CallbackResult = {
        type: string;
        data: unknown;
        completion: Completion;
    };
    export type CallbackInfo = Record<string, CallbackMode>;
    export type CallbackMode = "once" | "keepAlive";
    export type Completion = (result: Result<unknown>) => void;
}
declare module "RaycastApplication" {
    /**
     * Launch API
     */
    /**
     * Opens urls, files, apps, or Finder based on the passed {@link LaunchType}
     * @category Launching
     */
    export function open(launch: LaunchType): Promise<void>;
    /**
     * Union type for opening urls, files, apps, or Finder
     * @category Launching
     */
    export type LaunchType = URLLaunch | AppLaunch | FileLaunch | FinderLaunch;
    /**
     * Launches the default web browser
     * @category Launching
     */
    export interface URLLaunch {
        type: "url";
        /**
         * The URL to open
         */
        url: string;
    }
    /**
     * Launches a file in the registered default application
     * @category Launching
     */
    export interface FileLaunch {
        type: "file";
        /**
         * The (absolute) file path to launch
         */
        path: string;
    }
    /**
     * Launches an application by name and with optional arguments
     * @category Launching
     */
    export interface AppLaunch {
        type: "app";
        /**
         * Name of the application to launch, e.g. "Google Chrome"
         */
        name: string;
        /**
         * Additional parameters to pass to the opened application
         */
        arguments?: string[];
    }
    /**
     * Launches Finder and selects the given paths
     * @category Launching
     */
    export interface FinderLaunch {
        type: "finder";
        /**
         * One or more (absolute) file path to select in Finder
         */
        paths: string[];
    }
    /**
     * Toast API
     */
    /**
     * A Toast with a certain style, title, and message.
     * @category User Interface
     */
    export interface Toast {
        /**
         * Shows the Toast
         */
        show(): Promise<void>;
        /**
         * Hides the Toast
         */
        hide(): Promise<void>;
        /**
         * Updates the style, title, or message of an existing Toast.
         * Changing the style parameter will cause the Toast to auto-hide.
         * @param style - The visual style of the Toast
         * @param title - The title that will be updated in the Toast
         * @param message - The message that will be updated in the Toast
         */
        change(newStyle?: ToastStyle, newTitle?: string, newMessage?: string): Promise<void>;
    }
    /**
     * Defines the visual style of the Toast. Use {@link ToastStyle.Success} for confirmations and {@link ToastStyle.Failure} for displaying errors.
     * Use {@link ToastStyle.Animated} when your Toast should be shown until a process is completed.
     * You can hide it later by using {@link Toast.hide} or changing properties of an existing Toast with {@link Toast.change}.
     * A Toast with style {@link ToastStyle.HUD} will automatically hide the main window and show a compact Toast at the bottom of the screen.
     * @category User Interface
     */
    export enum ToastStyle {
        Success = "success",
        Failure = "failure",
        Animated = "animated",
        HUD = "hud"
    }
    /**
     * Presents a Toast with the the given style, title, and message.
     * Note that you need to call {@link Toast.show} on the return value to display the Toast.
     * @category User Interface
     * @param style - The visual style of the Toast
     * @param title - The title that will be displayed in the Toast
     * @param message - The message that will be displayed in the Toast
     * @returns A representation of the Toast
     */
    export function presentToast(style: ToastStyle, title: string, message?: string): Toast;
    /**
     * Clipboard API
     */
    /**
     * Set the contents of the clipboard. Raycast will automatically show a Toast when the function is called.
     * @category Clipboard
     * @param contents - The content type to set
     * @param shouldCloseWindow - Indicates whether the Raycast window should be closed after setting the contents
     */
    export function setClipboardContents(contents: ClipboardContents, shouldCloseWindow?: boolean): Promise<void>;
    /**
     * Clears the current clipboard contents
     * @category Clipboard
     */
    export function clearClipboardContents(): Promise<void>;
    /**
     * Union type for different clipboard content types
     * @category Clipboard
     */
    export type ClipboardContents = ClipboardText;
    /**
     * Textual clipboard content
     * @category Clipboard
     */
    export interface ClipboardText {
        type: "text";
        /**
         * The text to set the clipboard to
         */
        text: string;
        /**
         * A optional name for the contents that will be displayed in the Toast
         */
        name?: string;
    }
    /**
     * Timeout API
     */
    /**
     * Executes the given handler function after the given time has passed
     * @category Application
     * @param handler - The handler function to execute
     * @param milliseconds - The time in milliseconds the timer should wait before the specified function is executed
     * @returns A Promise with the timeout ID that can be used for cancellation through {@link clearTimeout}
     */
    export function setTimeout(handler: (...args: unknown[]) => void, milliseconds: number): Promise<string>;
    /**
     * Cancels a running timeout
     * @category Application
     * @param id - The timeout ID returned by {@link setTimeout}
     */
    export function clearTimeout(id: string): Promise<void>;
    /**
     * LocalStorage API
     */
    /**
     * Returns a Promise with a record of all stored values
     * @category Storage
     */
    export function allLocalStorageItems(): Promise<Record<string, LocalStorageValue>>;
    /**
     * Returns a Promise with the stored values for the given key
     * @category Storage
     */
    export function getLocalStorageItem(key: string): Promise<LocalStorageValue>;
    /**
     * Stores a value under the given key
     * @category Storage
     */
    export function setLocalStorageItem(key: string, value: LocalStorageValue): Promise<void>;
    /**
     * Removes the stored value for the given key
     * @category Storage
     */
    export function removeLocalStorageItem(key: string): Promise<void>;
    /**
     * Removes all stored values
     * @category Storage
     */
    export function clearLocalStorage(): Promise<void>;
    /**
     * Union type for the supported storage value types
     * @category Storage
     */
    export type LocalStorageValue = string | number | boolean;
}
declare module "RaycastEnvironment" {
    import { Result } from "RaycastSupport";
    /**
     * Holds data about the environment the command is running in.
     * Passed to a command on initialisation.
     * @category Environment
     */
    export interface Environment {
        /**
         * The version of the main Raycast app.
         */
        raycastVersion: string;
        /**
         * The name of the command as specified in the manifest file.
         */
        commandName: string;
        /**
         * The version of the command as specified in the manifest file.
         */
        commandVersion: string;
        /**
         * Any active search bar text at the time of launching the command.
         */
        searchText: string;
        /**
         * Environment variables passed to the file via a `.env.json` file.
         */
        vars: EnvVars;
    }
    /**
     * A record type holding the environment variables that have been passed to the command.
     * @category Environment
     */
    export type EnvVars = Record<string, unknown>;
    /**
     * Typealias for the init callback function. Providing a successful {@link Result} indicates that initialization was successful and the command can continue running.
     * If the command cannot continue running, e.g. because of version incompatibility based on data from {@link Environment}, provide an error message that will be shown in Raycast.
     * @category Environment
     */
    export type InitCallback = (result: Result<void>) => void;
}
declare module "RaycastKeyboard" {
    /**
     * A keyboard shortcut is defined by one or more modifier keys (command, control, etc.) and a single key equivalent (a character or special key).
     * See {@link KeyModifier} and {@link KeyEquivalent} for supported values.
     * @category Keyboard
     */
    export interface KeyboardShortcut {
        modifiers: KeyModifier[];
        key: KeyEquivalent;
    }
    /**
     * Lookup table for special chars
     * @category Keyboard
     * @internal
     */
    export const specialKeys: Record<string, string>;
    /**
     * Modifier of a {@link KeyboardShortcut}
     * @category Keyboard
     */
    export type KeyModifier = "cmd" | "ctrl" | "opt" | "shift";
    /**
     * KeyEquivalent of a {@link KeyboardShortcut}
     * @category Keyboard
     */
    export type KeyEquivalent = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "." | "," | ";" | "=" | "+" | "-" | "[" | "]" | "{" | "}" | "«" | "»" | "(" | ")" | "/" | "\\" | "'" | "`" | "§" | "^" | "@" | "$" | "return" | "delete" | "deleteForward" | "tab" | "arrowUp" | "arrowDown" | "arrowLeft" | "arrowRight" | "pageUp" | "pageDown" | "home" | "end" | "space" | "escape" | "enter" | "backspace";
}
declare module "RaycastNetworking" {
    /**
     * Performs a HTTP request. The method is loosely modelled after the browser fetch API.
     * In order to actually perform the request, the returned task must be started through a call to {@link HTTPRequestTask.resume} first.
     * Important: Only **HTTPS** URLs are supported and the connection must use TLS 1.2 or later.
     *
     * @category Networking
     * @param url - URL of the request. Only **HTTPS** URLs are supported and the connection must use TLS 1.2 or later.
     * @param options - Options for overriding the URL, and setting HTTP method, headers, and body
     * @returns A task object for the running request
     *
     * @example
     * ```
     * await fetch("https://httpbin.org/get", {
     *   method: "GET",
     *   headers: {
     *     "Content-Type": "application/json",
     *   },
     * })
     *   .resume()
     *   .then((response) => response.json());
     * ```
     */
    export function fetch(url: string, options?: HTTPRequest): HTTPRequestTask;
    /**
     * A running HTTP request that can be cancelled
     * @category Networking
     */
    export interface HTTPRequestTask {
        /**
         * Starts the HTTP request and returns a {@link HTTPResponse} when the request is finished
         */
        resume(): Promise<HTTPResponse>;
        /**
         * Cancels the HTTP request
         */
        cancel(): Promise<void>;
    }
    /**
     * Represents the configuration options for an HTTP request
     * @category Networking
     */
    export interface HTTPRequest {
        url?: string;
        /**
         * HTTP request method
         * @defaultValue `GET`
         */
        method?: HTTPRequestMethod;
        headers?: HTTPHeaders;
        body?: HTTPRequestBody;
    }
    /**
     * Union type for the supported HTTP methods
     * @category Networking
     */
    export type HTTPRequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS";
    /**
     * Represents the header fields of an HTTP request
     * @category Networking
     */
    export type HTTPHeaders = Record<string, string>;
    /**
     * The body type and data of an HTTP request
     * @category Networking
     */
    export type HTTPRequestBody = HTTPTextBody | HTTPJSONBody;
    /**
     * Represents an HTTP body with a raw string
     * @category Networking
     */
    export interface HTTPTextBody {
        type: "text";
        data: string;
    }
    /**
     * Represents an HTTP body with a JSON object
     * @category Networking
     */
    export interface HTTPJSONBody {
        type: "json";
        data: JSONData;
    }
    /**
     * The response object of a HTTP request
     * @category Networking
     */
    export interface HTTPResponse {
        /**
         * The raw response data as string
         */
        data: string;
        /**
         * Header fields of the response
         */
        headers: HTTPHeaders;
        /**
         * Expected length of the response content
         */
        size: number;
        /**
         * HTTP status code of the response
         */
        status: number;
        /**
         * HTTP status code of the response
         */
        url: string;
        /**
         * Convenience method to return the parsed JSON response
         */
        json(): Promise<unknown>;
        /**
         * Convenience method to return the response as string
         */
        text(): Promise<string>;
    }
    /**
     * Helper type to work with JSON object data in TypeScript
     * @category Networking
     */
    export type JSONData = void | Date | null | boolean | number | string | JSONData[] | {
        [prop: string]: JSONData;
    };
}
declare module "RaycastState" {
    /**
     * Inlined declarations from zustand/vanilla.d.ts
     */
    /** @internal */
    export type State = Record<string | number | symbol, unknown>;
    /** @internal */
    export type PartialState<T extends State, K extends keyof T = keyof T> = (Pick<T, K> | T) | ((state: T) => Pick<T, K> | T);
    /** @internal */
    export type StateSelector<T extends State, U> = (state: T) => U;
    /** @internal */
    export type EqualityChecker<T> = (state: T, newState: T) => boolean;
    /** @internal */
    export type StateListener<T> = (state: T, previousState: T) => void;
    /** @internal */
    export type StateSliceListener<T> = (slice: T, previousSlice: T) => void;
    /** @internal */
    export interface Subscribe<T extends State> {
        (listener: StateListener<T>): () => void;
        <StateSlice>(listener: StateSliceListener<StateSlice>, selector: StateSelector<T, StateSlice>, equalityFn?: EqualityChecker<StateSlice>): () => void;
    }
    /** @internal */
    export type SetState<T extends State> = {
        <K extends keyof T>(partial: PartialState<T, K>, replace?: boolean): void;
    };
    /** @internal */
    export type GetState<T extends State> = () => T;
    /** @internal */
    export type Destroy = () => void;
    /** @internal */
    export interface StoreApi<T extends State> {
        setState: SetState<T>;
        getState: GetState<T>;
        subscribe: Subscribe<T>;
        destroy: Destroy;
    }
    /** @internal */
    export type StateCreator<T extends State, CustomSetState = SetState<T>> = (set: CustomSetState, get: GetState<T>, api: StoreApi<T>) => T;
    /** @internal */
    export type create<TState extends State> = (createState: StateCreator<TState>) => StoreApi<TState>;
    /**
     * A record type for storing state.
     * @category State Management
     */
    export interface ViewState extends State {
    }
    /**
     * Constructs a state store and returns the utility functions {setState, getState, subscribe, destroy}.
     * The store can be used for updating custom {@link ViewState} that trigger re-rendering of the command view.
     * @category State Management
     * @example
     */
    export function viewStore<T extends ViewState>(stateCreator: StateCreator<T>): StoreApi<T>;
    /**
     * A two-way connection between Raycast and the command, used for updating view type properties.
     * When a view type requires a property to be of this type, Raycast will automatically update the value after certain UI events.
     * Vice versa, the value of the binding can be updated using the `set` method and triggers re-rendering.
     *
     * The update would typically be performed within a {@link viewStore} by first getting the binding from the {@link ViewState},
     * and then updating its value, for instance:
     * @category State Management
     * @example
     * ```
     * get().navigationSelection.set("detail");
     * ```
     */
    export interface Binding<T> {
        get: () => T | undefined;
        set: (value?: T) => void;
        /**
         * @internal
         */
        change: (value?: T) => void;
    }
    /**
     * Convenience function for creating a new {@link Binding} with an initial value.
     * @category State Management
     * @param initial - Initial value of the binding
     * @param onChange - Handler triggered when the value was changed in Raycast. It will *not* be called when you update the value through `set()`.
     * @returns A new Binding that wraps the value
     */
    export function binding<T>(initial?: T, onChange?: (newValue?: T) => void): Binding<T>;
}
declare module "RaycastUserInterface" {
    import { Binding } from "RaycastState";
    import { KeyboardShortcut } from "RaycastKeyboard";
    /**
     * Represents a list of actions in the user interface, accessible through the action panel.
     * The items can be grouped into sections and they can be assigned keyboard shortcuts.
     * Use the menu for context-specific actions on list items or detail screens.
     *
     * Note that when used for the action panel, the first (ENTER) and second (CMD + ENTER) menu items have automatically assigned keyboard shortcuts.
     * Custom shortcuts will work in addition to the default shortcuts.
     *
     * @category User Interface
     */
    export interface ActionPanel {
        /**
         * The title displayed at the top of the panel
         */
        title?: string;
        /**
         * The list of sections containing {@link MenuItem}
         */
        sections: MenuSection[];
    }
    /**
     * Visually separated group of menu items.
     * Use sections to group related menu items together.
     * @category User Interface
     */
    export interface MenuSection {
        /**
         * Title displayed above the section
         */
        title?: string;
        /**
         * The list of actual menu items within that section.
         * When used for the action panel, the first item in the list is the *primary* action that will be triggered by the default shortcut (ENTER), while the second item is the *secondary* action triggered by CMD + ENTER.
         */
        items: MenuItem[];
    }
    /**
     * Represents a list of menu items in the user interface, e.g. for defining submenus in an {@link ActionPanel}.
     * The items can be grouped into sections and they can be assigned keyboard shortcuts.
     * Use a menu for context-specific actions on list items or detail screens.
     *
     * Custom shortcuts will work in addition to the default shortcuts.
     *
     * @category User Interface
     */
    export interface Menu {
        /**
         * The list of sections containing {@link MenuItem}
         */
        sections: MenuSection[];
    }
    /**
     * Represents a context-specific action that can be selected in the user interface or triggered through an assigned keyboard shortcut on the respective view
     * @category User Interface
     */
    export interface MenuItem {
        /**
         * The title displayed for the menu item
         */
        title: string;
        /**
         * A optional icon displayed for the item.
         * See {@link ImageResource} for the supported formats and types.
         */
        icon?: ImageResource;
        /**
         * The keyboard shortcut for the menu item
         */
        shortcut?: KeyboardShortcut;
        /**
         * Callback that is triggered when a menu item is selected.
         * Use the handler to perform custom logic or call other Raycast API methods.
         */
        onAction?: () => void;
        /**
         * Callback that is used to define a submenu for the item.
         * You can return an actual {@link Menu} through a Promise (e.g. when the list of items should be dynamic or when it is loaded from the network).
         * See {@link submenuFilterType} to configure whether Raycast filters the items locally or you apply custom filtering logic.
         */
        submenu?: (searchText?: string) => Promise<Menu>;
        /**
         * Filtering behavior for the submenu.
         * See {@link MenuFilterType} for a description of the different behaviors.
         * The default value is {@link MenuFilterType.Default}.
         */
        submenuFilterType?: MenuFilterType;
    }
    /**
     * Defines the behavior for the search bar filtering of a menu.
     * {@link MenuFilterType.Default} means that Raycast locally filters the returned set of items when the user types into the search field.
     * {@link MenuFilterType.Custom} means that Raycast passes the current search text to the command, which is then responsible for returning the relevant set of items for that search text.
     * @category User Interface
     */
    export enum MenuFilterType {
        Default = "default",
        Custom = "custom"
    }
    /**
     * Union type for the supported top-level views
     * @category User Interface
     */
    type View = CommandView | ListView | DetailView;
    export default View;
    /**
     * Common properties of all views
     * @category User Interface
     */
    export interface ViewInterface {
        /**
         * Type of of the view
         */
        kind: string;
        /**
         * Optional tag used to identify and select a view, for instance in a {@link ContainerViewInterface}
         */
        tag?: string;
    }
    /**
     * Views that can be embedded in a navigation stack, show an optional search bar, and support a loading bar
     * @category User Interface
     */
    export interface NavigationViewInterface extends ViewInterface {
        /**
         * The main title for that view displayed in Raycast
         */
        navigationTitle?: string;
        /**
         * Indicates whether a loading bar should be shown or hidden below the search bar
         */
        isLoading?: boolean;
    }
    /**
     * Views that have one or more child views, and keep track of which child is currently selected through a {@link Binding}
     * @category User Interface
     */
    export interface ContainerViewInterface extends ViewInterface {
        /**
         * One or more child views
         */
        body: NavigationViewInterface[];
        /**
         * A two-way binding the controls the selected view. The value of the binding refers to a `tag` in {@link ViewInterface}
         */
        selectedView?: Binding<string>;
    }
    /**
     * Views that optionally show an {@link ActionPanel}
     * @category User Interface
     */
    export interface ActionViewInterface extends ViewInterface {
        /**
         * A optional action panel that is displayed on the screen
         */
        actions?: ActionPanel;
    }
    /**
     * Main root view of the app that holds one or more child views.
     * Cannot be nested in other views.
     * @category User Interface
     */
    export interface CommandView extends ContainerViewInterface {
        kind: "commandView";
        /**
         * Callback that is triggered when the app moves between the `background` and `active` (foreground) {@link CommandStatus}
         */
        onStatusChange?: (status: CommandStatus) => void;
    }
    /**
     * Operational status of the view.
     * Can be used to start and stop timeouts, empty caches, free resources, etc.
     * @category User Interface
     */
    export type CommandStatus = "active" | "background";
    /**
     * Shows sections and items with built-in or custom filtering through an optional search bar.
     * **Important**: Each {@link ListViewItem} needs a **unique ID**
     * @category User Interface
     */
    export interface ListView extends NavigationViewInterface, ActionViewInterface {
        kind: "listView";
        /**
         * The list of sections holding {@link ListViewItem}
         */
        sections?: ListViewSection[];
        /**
         * Callback triggered when the search bar text changes.
         * Note that built-in list filtering will be disabled when this callback is set.
         */
        onSearchTextChange?: (text: string) => void;
        /**
         * Callback triggered when an item in the list is selected
         */
        onSelectItem?: (id?: string) => void;
        /**
         * A two-way binding that updates the id of the selected item
         */
        selectedItemId?: Binding<string>;
        /**
         * Indicates whether the search bar should be shown or hidden
         */
        searchBarHidden?: boolean;
        /**
         * Placeholder text that will be shown in the search bar
         */
        searchBarPlaceholder?: string;
    }
    /**
     * Visually separated group of list items.
     * Use sections to group related list items together.
     * @category User Interface
     */
    export interface ListViewSection {
        kind: "listViewSection";
        /**
         * ID of the section. **Important**: Make sure to assing each section a **unique ID**
         */
        id: string;
        /**
         * Title displayed above the section
         */
        title?: string;
        /**
         * An optional subtitle displayed next to the title of the section
         */
        subtitle?: string;
        /**
         * The list of actual items within that section
         */
        items: ListViewItem[];
    }
    /**
     * Represents an item within a list section
     * @category User Interface
     */
    export interface ListViewItem {
        kind: "listViewItem";
        /**
         * The ID of the item. **Important**: Make sure to assign a **unique ID** to each item (globally, across sections)
         */
        id: string;
        /**
         * The main title displayed for that item
         */
        title: string;
        /**
         * A optional icon displayed for the list item.
         * See {@link ImageResource} for the supported formats and types.
         */
        icon?: ImageResource;
        /**
         * An optional subtitle displayed next to the main title
         */
        subtitle?: string;
        /**
         * A short additional title displayed for the item
         */
        accessoryTitle?: string;
        /**
         * An additional icon displayed for the item
         * See {@link ImageResource} for the supported formats and types.
         */
        accessoryIcon?: ImageResource;
        /**
         * An optional property used for indexing.
         * The string set here will enable filtering within that string through the search bar.
         * A common use case would be to set this to the same value as the title.
         */
        index?: string;
        /**
         * Action provider that returns the {@link ActionPanel} that will be set for the selected list item.
         * This is a convenience method that allows you to specify the actions that should be applicable for the selected list item.
         * Alternatively you can manage the state of the action panel by updating the `actions` property of {@link ListView} and re-rendering.
         * **Note**: If you set this function, the actions set on the {@link ListView} will be ignored.
         */
        actions?: (selectedItem: ListViewItem) => ActionPanel | undefined;
    }
    /**
     * Renders a markdown (CommonMark) string. Typically used when navigating from a list or as standalone view.
     * @category User Interface
     */
    export interface DetailView extends NavigationViewInterface, ActionViewInterface {
        kind: "detailView";
        /**
         * The CommonMark string to be rendered
         */
        markdown: string;
    }
    /**
     * Union type for the supported image types.
     * Note that the size of an icon should be 32 px.
     * The following options are supported:
     * - Choosing from the built-in {@link Icon} list (prefer that option for consistency)
     * - Reference custom icons from the `assets` folder of the command by file name only, e.g.: `my-icon.png`
     * - Specify a single emoji as string
     * - Reference absolute HTTPS urls
     * - Use {@link Image} to specify both a light and dark themed version and/or apply image transforms (e.g. circling).
     * @category User Interface
     */
    export type ImageResource = string | Icon | Image;
    type ImageData = string | Icon;
    /**
     * Class for specifying themed images (light, dark) and applying image transforms (e.g. circling).
     * @category User Interface
     */
    export class Image {
        private imageData?;
        private darkImageData?;
        private options;
        /**
         * Constructor for specifying light and dark images.
         * If the dark version is not provided, the first parameter will be used for both themes.
         */
        constructor(imageData?: ImageData, darkImageData?: ImageData);
        /**
         * Changes the shape of the image to a circle
         *
         * @category User Interface
         * @returns {@link Image} object.
         *
         * @example
         * ```
         * new Image("user-light.png").circled()
         * ```
         */
        circled(): this;
        /**
         * Changes the shape of the image to a rounded rectangle
         *
         * @category User Interface
         * @returns {@link Image} object.
         *
         * @example
         * ```
         * new Image("user-light.png").rounded()
         * ```
         */
        rounded(): this;
    }
    /**
     * List of built-in icons that can be used for actions or lists
     * @category User Interface
     */
    export enum Icon {
        ArrowClockwise = "arrow-clockwise-16",
        ArrowRight = "arrow-right-16",
        Binoculars = "binoculars-16",
        Bubble = "bubble-left-16",
        Calendar = "calendar-16",
        Checkmark = "checkmark-circle-16",
        ChevronDown = "chevron-down-16",
        ChevronUp = "chevron-up-16",
        Circle = "circle-16",
        Clipboard = "doc-on-clipboard-16",
        Clock = "clock-16",
        Desktop = "desktop-computer-16",
        Document = "doc-16",
        Dot = "dot-16",
        Download = "square-and-arrow-down-16",
        Envelope = "envelope-16",
        ExclamationMark = "exclamation-mark-triangle-16",
        Eye = "eye-16",
        EyeSlash = "eye-slash-16",
        Finder = "finder-16",
        Gear = "gearshape-16",
        Globe = "globe-16",
        Hammer = "hammer-16",
        LevelMeter = "level-meter-16",
        Link = "link-16",
        List = "main-list-view-16",
        MagnifyingGlass = "magnifyingglass-16",
        MemoryChip = "memorychip-16",
        Message = "message-16",
        Pencil = "pencil-16",
        Person = "person-crop-circle-16",
        Phone = "phone-16",
        Pin = "pin-16",
        Plus = "plus-16",
        Sidebar = "sidebar-right-16",
        SpeakerArrowDown = "speaker-arrow-down-16",
        SpeakerArrowUp = "speaker-arrow-up-16",
        SpeakerSlash = "speaker-slash-16",
        Star = "star-16",
        Text = "text-alignleft-16",
        TextDocument = "doc-plaintext-16",
        QuesionMark = "questionmark-circle-16",
        Terminal = "terminal-16",
        Trash = "trash-16",
        Upload = "square-and-arrow-up-16",
        Video = "video-16",
        Window = "macwindow-16",
        XmarkCircle = "xmark-circle-16"
    }
}
declare module "RaycastRendering" {
    import View from "RaycastUserInterface";
    /**
     * Main rendering function that must return a {@link CommandView} with its child views.
     * @category User Interface
     */
    export type App = () => View;
    /**
     * Triggers re-rendering.
     * @category User Interface
     * @internal
     */
    export function renderApp(): Promise<unknown>;
    /**
     * Takes a {@link App} and renders it in Raycast for command types that show a `view`.
     * Note that this function must either be called explicitly to trigger re-rendering or
     * implicitly through state changes when working with {@link viewStore} and {@link ViewState}.
     * @category User Interface
     */
    export function render(newApp: App): Promise<unknown>;
}
declare module "raycast-commands" {
    export * from "RaycastApplication";
    export * from "RaycastDebug";
    export * from "RaycastEnvironment";
    export * from "RaycastKeyboard";
    export * from "RaycastNetworking";
    export * from "RaycastRendering";
    export * from "RaycastState";
    export * from "RaycastSupport";
    export * from "RaycastUserInterface";
}
