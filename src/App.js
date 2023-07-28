import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
    <div class="full-view"></div>
    <div class="preview-list">
        <ul>
            <li>
                <input type="radio" id="tab-1" name="gallery-group"/>
                <label for="tab-1">
                    <div class="tab">
                        <img
                            src="https://www.thenewsminute.com/sites/default/files/PUBG_12112020_1200x800.jpg" />
                    </div>
                </label>
                <div class="content">
                    <img
                        src="https://www.thenewsminute.com/sites/default/files/PUBG_12112020_1200x800.jpg" />
                </div>
            </li>
            <li>
                <input type="radio" id="tab-2" name="gallery-group"/>
                <label for="tab-2">
                    <div class="tab">
                        <img
                            src="https://th.bing.com/th/id/OIP.Ovp6vMyJ192iIUfhmQZXfgAAAA?pid=ImgDet&rs=1" />
                    </div>
                </label>
                <div class="content">
                    <img
                        src="https://th.bing.com/th/id/OIP.Ovp6vMyJ192iIUfhmQZXfgAAAA?pid=ImgDet&rs=1" />
                </div>
            </li>
            <li>
                <input type="radio" id="tab-3" name="gallery-group"/>
                <label for="tab-3">
                    <div class="tab">
                        <img
                            src="https://th.bing.com/th/id/OIP.aKnqjcvHSxCt3awI8QOKYAHaEK?pid=ImgDet&rs=1" />
                    </div>
                </label>
                <div class="content">
                    <img
                        src="https://th.bing.com/th/id/OIP.aKnqjcvHSxCt3awI8QOKYAHaEK?pid=ImgDet&rs=1" />
                </div>
            </li>
            <li>
                <input type="radio" id="tab-4" name="gallery-group" checked/>
                <label for="tab-4">
                    <div class="tab">
                        <img
                            src="https://th.bing.com/th/id/OIP.Ch1wnaiE6p9iA0U9JfjICwHaEK?pid=ImgDet&rs=1" />
                    </div>
                </label>
                <div class="content">
                    <img src="https://th.bing.com/th/id/OIP.Ch1wnaiE6p9iA0U9JfjICwHaEK?pid=ImgDet&rs=1" />
                </div>
            </li>
        </ul>
    </div>
</div>
  );
}

export default App;
