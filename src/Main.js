function Main(){
    return <div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" id="title" autoFocus />
            <textarea id='body' placeholder='Write the quest info here...' />
        </div>
        <div className="app-main-note-preview">
            <h1 className="preview-title">QUEST TITLE</h1>
            <div className="markdown-preview">Quest Preview</div>

        </div>
    </div>;

}

export default Main;
