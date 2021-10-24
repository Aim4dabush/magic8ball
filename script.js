//image sources
const source = [
    'https://bn1305files.storage.live.com/y4mhnQVdZ4UHD6dAWYdGNOJHx6txe87JAwfzty62UmkWvyJ94gh2yqlj4RTlAGtO3NSvrVT0vY1JWCNzDuHeEQmH2uE_RwA0gMIawiPJbydnC1ekO8QVFa5l-JfALHDv3a_K_XaP6VKi6Vw9rT6IAZx2bRx1M_BPYqoitj6P07d7BMBd4AAfIkmB6foGUdDTo05?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4mf3FeSAjs9okYqLLXbXZ95hEzMN-nwhJ1Vc9BR84aPON2sPAR9JdPogATCYA-XZgWWjnfaakbBXG1GNx3P4U7U9NXiwJLydcRBaR0otQoF-DBsxTl7pcu-7ohjYrEZVAvrBw42NFS3kICh-hEbA6TCrKpdI-DV-UcAQ_fKwLE8u9L5MWEzBwV5YmLldaTquat?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4mLuWMvoUxm6bLoReP-mqTmWhjOOwuZwP8woYmUTVR0Dc9cLCSsghOZR2EdGl5ajpEs8uXPZeWxt6tD8EPIW54EilJ2O6d0e2WD7qiKLDfobPQ_0-pIxe4TOHaaq4PRlWbOobalW7D5-gfvEcsdQQk99gJoKgE_wWiifLavWUI1Ip3kZezAdqDJ5MVjAr0IhYS?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4mFvn6w5kP_ws7vpCssJLa5D5Kk2lJglzkoRwdBFtNQSZYwudWlLl4CDE_vWEXiX9obphbeBnVELj2bLhCCvO9szHvFqMRP6avgMpSwMAh4MPeWLvsp0JjZQsdfB-VJydMb2mhboengmdWEPLEl3sxFs1fttqt1jO6YwQqBGTaUwPioXsWwtvJyLkVdoZcgIvT?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4mfY8wdrFDDdvZi-hzVQ2zwTC_tVFCM5LsEwzvGW-DHOgqXn6Xxmaf4lhuh0K-Uziuu_yKMydnP7KZ1dv_PNT7bGNsOLKsYfUlyiKvyCQ3GXrYHLAmea_wQPBzKCcQbiXPtlhntOM7-Kel07L03Tmcz8gYvyjKEyItqNVfYaDUZ-cuTc5nUGJtgcrLY1_-FBz2?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4m3ANMqOzJAnW6_QsHbofB_Mf47X_1tX0zBBM51gxKsxPUaMqgPjExS37n15Ua86ukNT9GwBrjGZqmtE_vuPJnMzmvZhfM00mV0RLH451qdEzf3xypycFa79PVwqoJpAawXm4GXD3LEIzwkos5AjQIGmW3J089IUHMexwvzAsNsX3qa1mXjoxPxbNSA3tOWEWE?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4mmDS1V8_IR6VhGFERdHDDULqIf1qsi3uZlMUSbT7CqopwFim11CGB_218V3HgT2CwhdPb2Ef6-Hx4XpasRopkp_ykFlXhVsuWuCZe31QeXvvKAo7DiKJx-ChhNX2jmf8sbnUoSYT-mh96SBjsKEY9SpLhs3XFP5ZVFwXLG7VRQa7hMoI5P8qoF7f5NUBuykWe?width=900&height=900&cropmode=none',
    'https://bn1305files.storage.live.com/y4mMvMRitHXixUHXiAHq1TTRKYs0F3PHOuQESa9jMeGDtTvZkh9eONIKF0G-Ean4uy7Of4tPNWndGa0ROb8Rr7ZD6Qc4_2vmQxd-dYfRBn_SzqOjk7qBgCxItWl6hvSoEVaQF_s0PFlDwIEfwMhiGtHjcPmXXQjRNkbgJeFUCPs-NUpmY_664ZoMZYgWx-R6znp?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4mv6tsJLT0xywLQ8J445-q7plR7NwY-wgM1a85wkpXR99n6KAezli4Xc3EcWhZNUkARuU1FeuGlo6Ki_MJa0ANDijRPXGO23iXGFAtYR5u5cfnp3zg7BFD7bDcWV2JFyZ5okR2dIT9bwL7-mKVPg88VwEsQrHqGck2rl82IT9rYANsJL7Q-250UUPhbqHibQqW?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4mEyV_fOf5eyE8SdrCe6DFyNaf6xGgQL6eToS6q7sZklOsXKnEB08mvqP_TekH-euPthb7YXJR_Qrn7BrDICEmaHHCOCDshuvhGxLzyC1gg6nEDmhyp22LK0PJ3qiYgU0K8F_avTNTpi7vE5EajkJWrrLtKFm0Q4A6QHzQZ1-Sbadb4r4WOpB1Yt1i0NdH-C4z?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4mRzamcDewoal4pHjpVo9hIIdT05oTythZtR_s9r3v3JSXEM8ayT9gQbnASnxPxWvDClWiZyJA6R4W3yslSLnl9mYwHytVKYglqe8n3ui1SqeycVk-lYJerpY6oesHT_G1N_5zBpX6Q4Kt8hjeC0e6L3qANFUPsXBFmei_Y2nGVx4AGL3zfAhkWJT4hbQ8FTfc?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4m-FKO8KC6wa-wF006O9lWNz6c4TW4UuiU04_M97BkvidzBC2EjIZr2_kHxVBvUEx0s51d4_u8Mi6m2elofY1pYbUwoNVp5Q_o8-yv45NpVKcDLuje6nP42auQJqEFitrL3N0BLYxFnIo7zDdz3hHLQhaXMemYLTwbCDSCDvkBx0QPj_5cP9GJaKhY8qEroAYZ?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4m9pLMrdQ5PR8WthEGl2HpRuwWxnwJW6hZ8VG9XeVUpekUUSVju25aLXgfdVF0x56zv4jRTpC-qdqho3D0eRHti6QX8qUd6JNyAJL0-vLLqWoJgJKldOdpfLir0fi6WpCKh2xtJU8a10AUzyl9yyX2Tge3RJ45YQW2IjxMqUK00YRdm6f1Gs00f9OZOrlX_fpP?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4mT4ogEvdCIOp6B9Psa2EvbTdJ_V2WJcDiYdwYNPsiSZ9cRFekzjrhXQCPLJMfbwW5RQl-WAjsap52dA-vHGUb9Lxj3dwC2mEKnBGD4KkI0vbfxXsJ72obQCuZPrVhzPWfUZOz4faHI12PcCwFnovdAbB7WcuHrLjHTOpXwyaLImZobHV81pw4MwlVmW_VZE6X?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4mEO_9P-mdlDCzr0VdUKxFsInScsPWGArEdPIpVFQ0_qR0jao9K-yO_aN0W2ITE5ExMrMxDbHpOQm7uYSDkVKBZhqgi37JjjzqSA417KtTzn_qPEoWjaGBBL83huaW7PNn_9VxydM4eeJXct8R8i1xqJL99_M2rBHZ_774VU4aPRgwayD4ZYXp6sPceHAz7LwY?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4mEEBH5-LLHjt_vEZsae_zJ6m6h4VgVR1BfEFzIwlD-IrdUiEdo25K5Cxs6_Hz6eI1LDWseMpkKk8aNfKSBKhue4GLSRIgHgGlMHTonjgE7XsiUVjZbgdlgUCzVBEOVBjFdNqc2F1dHLoh3p86sRSzF4aMvnsAWRw-2jW0J8Zu0Z4VzZqyx8QYFk6XfdA8o4m5?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4mp_Y4opB7TL88n4K_Qr7x1pmInTK8mLIl03EAMTUTd-ZlLSv0JBEh3-qAq3GTUhucyCwNV85lUmfj3ctDjzziYnEG5uBwxDxR9x56H20quP_YntsuIyc0XpZlObQupcbeU2YX0x_s4oysCj9dLWBoybcfVI1m3bVEmttkkzWQ6AGPwzbPXqWsVWjTSozSNgZR?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4mlB74yktGFmAtSO_0kB_7rtLCn298OPpA8mHngxd1duHxVVANmaLEaWRMyVuvoyRqwuFPc2vtnno6sqs-5k1aJJKikd78-kU5IkxbH7i3U0ZJkAhdUkKX1a61cFCcdWGg3qaan1LEXdRaAhZQBwp230BhnLCBf9DerGI5rGYe0xBG0Gf5jNrGfXC0VX5swgAG?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4mk0lsT67aFQJ3Dw4gCDRS46cryNs18PXYMxt-iX4FCOY8-QaLPnKMd4lt2fpT4-_Mu0vCgo81VEpJyCFpbKdK4F4T1_0aDSsr9qRZ2A6giMB2TAvmUHSIoZVP0LPPzPT3PZdp39xM1cRglSThvFQWD835AUbnWEor4jxsnOfXxhlPn2twEBBk6ONOvxsBPxDL?width=256&height=256&cropmode=none',
    'https://bn1305files.storage.live.com/y4mAtS1J9eU_cVQZxYf5F9xY5BnVzGSlsi24iXO7ak2BHPTiaKtlfto6ano-SzvS8G6b9PsEY0Q44MH6NCh4swuzLlQVwMLbwk-oGl6h2ErRlHwaLymgEYwqLArb6NQPJFrj8dDlEk-exQgsR8_wPef2n5mU6aMn2Hc9nc9DeVmpFmbldXO1pOlEGL6kesKoP9S?width=256&height=256&cropmode=none'
]

//Generate random image source
function imageSource(){
    const magicEightBallSource = [...source];
    const randomSource = Math.floor(Math.random() * 21);
    const img = document.getElementById('eightBall');
    return img.src = magicEightBallSource[randomSource];
}

//Execute getting image and question when clicking the button
function askQuestion(){
    const text = document.getElementById('question').value;
    imageSource();
    checkForQuestionMark(text);
    document.getElementById('question').value = null
}

//Execute getting image and question when pressing enter
function enterPressEvent(key){
    if(key.keyCode === 13){
        askQuestion();
    }
}

//Check the text to see if it has a question mark
function checkForQuestionMark(question){
    const answer = document.getElementById('answer');
    if(question.length === 0){
        return answer.innerText = "You didn't ask anything. Try again";
    }
    else if(question[question.length - 1] !== '?'){
        return answer.innerText = question + ' ?';
    }
    else{
        return answer.innerText = question;
    }
}







