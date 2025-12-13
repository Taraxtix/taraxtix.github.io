import type {CSSProperties} from "react";

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export const h1AnchorStyle: CSSProperties = {
    paddingTop: '22vh',
    marginTop: '-22vh',
}