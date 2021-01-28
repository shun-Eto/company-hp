export const types = {
	update_value: "[ Test ] : update_value",
};

export interface Update_Value {
	type: typeof types.update_value;
	payload: { value: string };
}
export function update_value(value: string): Update_Value {
	return {
		type: types.update_value,
		payload: { value },
	};
}

export type ActionProps = Update_Value;
