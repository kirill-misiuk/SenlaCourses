function is_usZipCode(str)
{
    regexp = /^[A-Z]{2}(?: [0-9]{5})?$/;

    if (regexp.test(str))
    {
        return true;
    }
    else
    {
        return false;
    }
}




console.log(is_usZipCode("NY 23434"));
