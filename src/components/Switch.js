export default function Switch({state, stateSetter}) {

    const switchHandler = () => {
        stateSetter(!state);
    }

    return (
        <div class="form-check form-switch">
            <input
                id="mode"
                type="checkbox"
                class="form-check-input"
                checked={state}
                onChange={switchHandler}
            />
            <label htmlFor="mode">Advanced mode</label>
        </div>
    );
}