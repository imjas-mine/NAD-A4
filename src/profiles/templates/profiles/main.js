const avatarBox=document.getElementById('avatar-box')
const profileForm=document.getElementById('profile-form')
const csrf=document.getElementById('csrfmiddlewaretoken')
const bioInput=document.getElementById('id_bio')
const avatarInput=documen.getElementById('id_avatar')
profileForm.addEventListener('submit',e=>{
    e.preventDefault()

    const formData=new FormData()
    formData.append('csrfmiddlewaretoken',csrf[0].value)
    formData.append('bio',bioInput.value)
    formData.append('avatar',avatarInput.files[0])
    
    $.ajax({
        type:'POST',
        url:'',
        enctype:'multipart/form-data',
        data:formData,
        success:function(response){
            console.log(response)
            avatarBox.innerHTML=`
        <img src="{{response.avatar}}" class="rounded" height="200px" width="auto" alt="${repsonse.user}">
                
            `
            bioInput.value=response.bio
            handleAlerts('success','your profile has been updated!')
        },
        error:function(error){
            console.log(error)
        },
        processData:false,
        contentType:false,
        cache:false,
    })
})