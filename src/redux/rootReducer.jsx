import {createStore, combineReducers} from 'redux'
import { XiNgauReducer } from './XiNgauReducer';
import OanTuTiReducer from './OanTuTiReducer'
import BaiTapDatVeReducer from './BaiTapDatVeReducer';


const rootReducer = combineReducers({
    XiNgauReducer,
    OanTuTiReducer,
    BaiTapDatVeReducer
});

export const store = createStore(
    rootReducer
);
