const socket = io();

socket.on('new_user', (data) =>{
    alert(`new user connect ${data.user}`);
})

socket.on('new_msg', (data)=>{
    $('#container_msg').append(`
    <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <span class="badge bg-primary rounded-pill">${data.user}</span>
        ${data.msg}
        </div>
    </li>
    `)
})

function login() {
    mail = $('#login_form #mail').val()
    user = $('#login_form #user').val()
    socket.emit('user_data', {mail: mail, user: user})
}

function send_msg() {
    msg = $('#msg').val();
    socket.emit('send_msg', {msg: msg, user: user})
}