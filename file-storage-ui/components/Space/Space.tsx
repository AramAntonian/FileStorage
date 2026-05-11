interface SpaceParams {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
}

function Space({ top, left, right, bottom }: SpaceParams) {
        const result = {
            marginTop: (top ?? 30) + "px",
            marginLeft: (left ?? 0) + "px",
            marginRight: (right ?? 0) + "px",
            marginBottom: (bottom ?? 0) + "px",
        }
    return <div style={result}></div>;
}

export default Space