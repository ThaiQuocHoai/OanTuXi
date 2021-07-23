

const defaultState = {
    danhSachGheDangDat: [
        // {soGhe: "A1", gia: 1000}
    ],
    tongTien: 0
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
            state.tongTien = danhSachGheDangDat.reduce((tongTien, danhSachGheDangDat, index)=>{
               return tongTien += danhSachGheDangDat.gia; 
            },0);
            return {...state}
        };
        case 'HUY_GHE': {
            let danhSachGhe = [...state.danhSachGheDangDat];
            danhSachGhe = danhSachGhe.filter(x=>x.soGhe !== action.soGhe);
            state.tongTien = danhSachGhe.reduce((tongTien, danhSachGhe, index)=>{
                return tongTien += danhSachGhe.gia; 
             },0);
            return {...state, danhSachGheDangDat: danhSachGhe}
        }
        default : {
            return {...state}
        }
    }
}

export default BaiTapDatVeReducer;