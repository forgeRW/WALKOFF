export class Argument {
	/**
	 * Name of the argument in question
	 */
	name: string;
	/**
	 * The static value of the argument in question. Only used if reference is not specified.
	 * If reference is specified, selection is used to select specific values.
	 */
	value?: any;
	/**
	 * Reference to an Action UID to use the output of
	 */
	reference?: string;
	/**
	 * Selection is currently specified in the UI as a string,
	 * but is split and sent/ingested as an array containing strings and numbers
	 */
	selection?: string | Array<string | number>;
}
