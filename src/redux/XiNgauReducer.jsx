const xiNgauState = {
    taiXiu: false,//tai, false: xiu
    mangXucXac: [
        { ma: 1, hinhAnh: './img/1.png' },
        { ma: 1, hinhAnh: './img/1.png' },
        { ma: 1, hinhAnh: './img/1.png' }
    ],
    soBanThang: 0,
    tongSoBanChoi: 0
}

export const XiNgauReducer = (state = xiNgauState, action) => {

    switch (action.type) {
        case 'CHON': {
            state.taiXiu = action.value;
            return { ...state }
        }; break;
        case 'PLAY': {
            let mangXucXacRandom = [];
            for (let i = 0; i < 3; i++) {
                const number = Math.floor(Math.random() * 6) + 1;
                //tao ra xuc xac tu so ngau nhien
                let ngaunhien = { ma: number, hinhAnh: `./img/${number}.png` }
                mangXucXacRandom.push(ngaunhien);
            }
            state.mangXucXac = mangXucXacRandom;
            //xu li tang so ban choi
            state.tongSoBanChoi += 1;
            //
            let tongSoDiem = mangXucXacRandom.reduce((tongDiem, xucXac, index) => {
                return tongDiem += xucXac.ma;
            }, 0)
            if (state.taiXiu && tongSoDiem > 11 || tongSoDiem<=11 && !state.taiXiu) {
                state.soBanThang+=1;
            }

            return { ...state }
        }; break;

        default: return { ...state }
    }

}