
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './screens/mainPage';
import { Podcast } from './screens/podcast';
import { Episode } from './screens/episode';
import { Header } from './components/header';

export const App = () => {
    return <BrowserRouter>
        <Header />
        <div className="main">
            <Routes>
                <Route path="/" Component={MainPage} />
                <Route path="/podcast/:podcastId" Component={Podcast} />
                <Route path="/podcast/:podcastId/episode/:episodeId" Component={Episode} />
            </Routes>
        </div>
    </BrowserRouter>
}