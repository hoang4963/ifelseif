let usename= prompt('Nhap ten nguoi dung')
if (usename == 'admin')
{

    let pass = prompt('Nhap mat khau')
    if (pass == 'TheMaster')
    {
        alert('Welcome')
    }
    else if (!pass)
    {
        alert('Canceled')
    }
    else
    {
        alert('Wrong Password')
    }

}
else if (!usename)
{
    alert('Canceled')
}
else
{
    alert('I do not know you')
}
