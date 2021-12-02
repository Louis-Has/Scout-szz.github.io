import { useCallback, useState } from 'react'

export function useInput(init = "") {
    let [value, setValue] = useState(init);

    let onChange = useCallback(function onChange(e) {
        setValue(e.target.value);
    }, []);


    return { value: { value, onChange }, setValue };
}
export function useDiv(init = "") {
    let [html, setValue] = useState(init);

    let onChange = useCallback(function onChange(e) {
        setValue(e.target.value);
    }, []);


    return { value: { html, onChange }, setValue };
}
