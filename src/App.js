import React from 'react';
import {GlobalStyled,Logo} from "./style";
import {GlobalStyleds} from './statics/iconfont/iconfont'
import Header from './common/header/index'
import {Provider} from 'react-redux'
import store from './store/index'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import {BrowserRouter,Route }from 'react-router-dom'
import Login from './pages/login'
import Write from './pages/write'
function App() {
  return (
    <div className="dell">

        <GlobalStyled/>
        <GlobalStyleds/>
        <Provider store={store}>

            <BrowserRouter>
                <div>
                <Header/>
                <Route path='/' exact component={Home}></Route>
                    <Route path='/detail/:id' exact component={Detail}></Route>
                    <Route path='/write' exact component={Write}></Route>
                    <Route path='/login' exact component={Login}></Route>
                </div>
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
