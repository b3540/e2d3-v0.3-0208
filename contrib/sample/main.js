/**
�T���v���pmain.js

Window���́A�O���[�o���ϐ� windowSize ���g�p���邱�Ƃ��ł��܂�
*/

//Excel�Ƀf�[�^���Z�b�g���ꂽ��A�ŏ��ɌĂ΂�郁�\�b�h�i�K�{�j
function e2d3Show() {

    //Excel��ł̃f�[�^�ύX�C�x���g��⑫�i���̏ꍇ��e2d3Update���\�b�h���R�[���o�b�N�Ɏw��j
    //"e2d3BindId"�̓O���[�o���ȕϐ��ł�
    e2d3.addChangeEvent(e2d3BindId, e2d3Update, function () {

        //Excel��̃o�C���h�͈͂̃f�[�^��json�ɕϊ��i�K�{�j�B(���̏ꍇ�R�[���o�b�N��show���\�b�h���w��)
        e2d3.bind2Json(e2d3BindId, { dimension: '3d' }, show);
    });
}
//�f�[�^�ύX���̃R�[���o�b�N�p���\�b�h�i�K�{�j
function e2d3Update(responce) {
    console.log("e2d3Update :" + responce);
    dataUpdate(responce);
}

//�ϊ����ꂽjson�f�[�^���g���ăO���t�`��
function show(data) {
    //data�́Abind2json�œn��dimension�I�v�V�����ɂ���āA���`���ꂽJson�I�u�W�F�N�g�ł��B
    //�`��́A#e2d3-chart-area ���ɂ��Ă��������B


}

