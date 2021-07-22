


const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/oantuti/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './img/oantuti/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/oantuti/bao.png', datCuoc: false },
    ],
    ketQua: "I'm iron man, I love you 3000!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'bao', hinhAnh: './img/oantuti/bao.png' }
}

const OanTuTiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_KBB': {
            let mangCuoc = [...state.mangDatCuoc];
            //tao ra mang cuoc moi tu mang cuoc cu
            mangCuoc = mangCuoc.map((item, index) => {
                if (item.ma === action.maDatCuoc) {
                    return { ...item, datCuoc: true };
                }
                return { ...item, datCuoc: false };
            });
            state.mangDatCuoc = mangCuoc;
            return { ...state };
        };

        case 'RAN_DOM': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let qcNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = qcNgauNhien;
            return { ...state }
        }

        case 'END_GAME': {
            state.soBanChoi += 1;
            let player = { ...state.mangDatCuoc.find(item => item.datCuoc) };
            let computer = state.computer;
            switch (player.ma) {
                case 'keo': {
                    if (computer.ma === 'keo') {
                        state.ketQua = 'bạn hoà !!!';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Thua sml :V';
                    } else {
                        state.ketQua = "I'm iron man, I love you 3000!!";
                        state.soBanThang += 1;
                    }
                }; break;
                case 'bua': {
                    if (computer.ma === 'bua') {
                        state.ketQua = 'bạn hoà !!!';
                    } else if (computer.ma === 'bao') {
                        state.ketQua = 'Thua sml :V';
                    } else {
                        state.ketQua = "I'm iron man, I love you 3000!!";
                        state.soBanThang += 1;
                    }
                }; break;
                case 'bao': {
                    if (computer.ma === 'bao') {
                        state.ketQua = 'bạn hoà !!!';
                    } else if (computer.ma === 'keo') {
                        state.ketQua = 'Thua sml :V';
                    } else {
                        state.ketQua = "I'm iron man, I love you 3000!!";
                        state.soBanThang += 1;
                    }
                }; break;
                default: {
                    state.ketQua = "I'm iron man, I love you 3000!!";
                    state.soBanThang += 1;
                } break;
            }
            return { ...state };
        }

        default: {
            return { ...state }
        }; break;
    }
}

export default OanTuTiReducer;