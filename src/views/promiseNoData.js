function promiseNoData(promiseState){
    if (!promiseState.promise) return <div>No data</div>;
    if (promiseState.data) return false;
    if (promiseState.error) return <div class="TODO">{promiseState.error.toString()}</div>;
    return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" class="TODO"></img>
}

export default promiseNoData;