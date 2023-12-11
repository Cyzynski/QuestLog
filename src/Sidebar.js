function Sidebar({quests, onAddQuest}){


    return (
    <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Quest Log</h1>
            <button onClick={onAddQuest}>Add</button>
        </div>
        <div className="app-sidebar-notes">
            {quests.map((quest) =>(
                <div className="app-sidebar-note">
                <div className="sidebar-note-title">
                    <strong>TITLE</strong>
                    <button>Abandon Quest</button>
                </div>

                <p>Note Preview</p>

                <small className="note-meta">
                    Last Modified [date]
                </small>

            </div>
            ))}
        </div>
    </div>
    );
}

export default Sidebar;
