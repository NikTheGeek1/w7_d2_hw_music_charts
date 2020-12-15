import './MusicList.css';
import MusicItem from '../MusicItem/MusicItem';

const MusicList = ({ musicData }) => {
    console.log(musicData, 'MusicList.js', 'line: ', '5');

    const musicItems = musicData.map((item, idx) => {
        return <MusicItem key={idx} item={item} idx={idx}/>;
    });

    return (
        <ul className="MusicList">
            {musicItems}
        </ul>
    );
};

export default MusicList;