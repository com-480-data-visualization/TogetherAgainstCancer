export default function Switch({state, stateSetter}) {

    const switchHandler = () => {
        stateSetter(!state);
    }

    return (
        <div className="form-switch">
            <input
                id="mode"
                type="checkbox"
                className="form-check-input"
                checked={state}
                onChange={switchHandler}
            />
        </div>
    );
}