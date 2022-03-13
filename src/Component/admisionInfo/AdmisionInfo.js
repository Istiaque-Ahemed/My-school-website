import React from 'react';
import { Container } from 'react-bootstrap';
import '../admisionInfo/admisionInfo.css'

const AdmisionInfo = () => {
    return (
        <Container>
            <p className='addmisionInfo'>ভর্তি তথ্য</p>
            <p>এতদ্বারা জানানো যাচ্ছে যে, আগামী ১৩.১২.২০১৮ইং তারিখে ডেমো হাইস্কুল এন্ড কলেজের নবম শ্রেণীতে নতুন ছাত্রছাত্রীদের ভর্তি করা হবে। যারা জেএসসি পরীক্ষায় ২.০ পেয়েছে কেবল তারাই আবেদন করতে পারবে। আগ্রহীরা ওয়েবসাইট থেকে ফরম ডাউনলোড করে পূরণ করে্আমাদের ই-মেইলে অথবা সরাসরি আমাদের অফিসে জমা দেয়ার জন্য বলা হলো।<br />

                ফরম মূল্য : ২০০ টাকা<br />
                ভর্তি ফি : ২০০০ টাকা<br /><br /><br />

                মো: কামরুল ইসলাম<br />
                প্রিন্সিপাল<br />
                ডোমো সরকারী হাইস্কুল এন্ড কলেজ<br />
                চুনারুঘাট সদর, চুনারুঘাট, হবিগঞ্জ।</p>
        </Container>
    );
};

export default AdmisionInfo;