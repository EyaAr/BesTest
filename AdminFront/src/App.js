import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Tables from 'pages/Tables';
import Profile from 'pages/Profile';
import tableParent from 'pages/tableParent';
import Maps from 'pages/Maps';
import Footer from 'components/Footer';
import TeacherV from 'pages/TeacherV';
import ParentV from 'pages/ParentV';
import KidP from 'pages/KidP';
import bestest from 'pages/bestest';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import Kid from 'components/Kid';


function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/Profile" component={Profile} />
                    <Route exact path="/tables" component={Tables} />
                    <Route exact path="/tableParent" component={tableParent} />
                    <Route exact path="/maps" component={Maps} />
                    <Route exact path="/Kid" component={Kid} />
                    <Route exact path="/TeacherV" component={TeacherV} />
                    <Route exact path="/ParentV" component={ParentV} />
                    <Route exact path="/KidP" component={KidP} />
                    <Route exact path="/bestest" component={bestest} />
                   
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;
