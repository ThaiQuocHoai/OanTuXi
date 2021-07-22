

const defaultState = {
    danhSachGheDangDat: [
        // {soGhe: "A1", gia: 1000}
    ]
}

const BaiTapDatVeReducer = (state = defaultState, action) =>{
    switch (action.type){
        case 'DAT_GHE' : {
            let danhSachGheDangDat = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDat.findIndex(x=>x.soGhe === action.ghe.soGhe);
            if(index !== -1){
                danhSachGheDangDat.splice(index,1);
            } else{
                danhSachGheDangDat.push(action.ghe);
            }
            state.danhSachGheDangDat = danhSachGheDangDat;
            return {...state}
        }
        default : {
            return {...state}
        }
    }
}

export default BaiTapDatVeReducer;