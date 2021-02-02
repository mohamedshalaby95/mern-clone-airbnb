
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './components/home';
//import Footer from './components/footer/footer'
import SearchResult from './components/searchresult/searchResult';
import Error from './components/ErrorScreen/error'

const App=() =>{
   return(
    <div> 
        <Router >
              <Switch>
                <Route exact  path='/' component={Home} />
                <Route exact  path='/hosting/:location' component={SearchResult} />
                <Route path="*" exact component={Error} />
              </Switch>
        </Router>
        
    </div>
   )
}
export default App;