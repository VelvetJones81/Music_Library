import axios from "axios";


const DisplaySongs = (props) => {
    async function updateSong(songPk) {
        let response = await axios.patch(`http://127.0.0.1:8000/api/music/${songPk}/`);
        if (response.status === 202) await props.getAllSongs();
    }
}

    async function deleteSong(songPk) {
        let response = await axios.delete(`http://127.0.0.1:8000/api/music/${songPk}/`)
        if (response.status === 200) await props.getAllSongs()
    }

    return (
        <div>
            <h2>Music Library!</h2>
            <table className="displaySongs">
                <tbody>
                    <tr>
                        <th>TITLE:</th>
                        <th>ARTIST:</th>
                        <th>ALBUM:</th>
                        <th>RELEASE_DATE:</th>
                        <th>GENRE:</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
        

    