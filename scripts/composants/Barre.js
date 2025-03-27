function Barre(){
    return(
    <div class="container my-4">
        <div class="row">
            <div class="col-md-8">
                <input type="text" class="form-control" placeholder="Chercher..." />
            </div>
            <div class="col-md-4">
                <select class="form-select">
                    <option>Trie par...</option>
                    <option>Plus recents</option>
                    <option>Plus connus</option>
                </select>
            </div>
        </div>
    </div>
    );
}