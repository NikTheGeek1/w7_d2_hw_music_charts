import './MusicItem.css';

const MusicItem = ({ item, idx }) => {
    console.log(item, 'MusicItem.js', 'line: ', '4');
    return (
        <li className="MusicItem">
            <div className="MusicItemDiv">
                <h2 className="ChartNum">#{idx + 1}</h2>
                <img className="SongImage" src={item['im:image'][2].label} alt={idx + "songImage"} />
                <audio className="SongPreview" src={item['link'][1].attributes.href} controls/>
                <span className="SongInfo">
                    {item['im:name'].label} <br />
                    <a target="_blank"
                        rel="noreferrer"
                        href={item['im:artist'].attributes.href}>
                        {item['im:artist'].label}
                    </a>
                </span>
            </div>
        </li>
    );
};

export default MusicItem;