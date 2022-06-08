import ContactsItem from "../../components/ContactsItem/ContactsItem";
import s from './ContactsPage.module.scss';

const ContactsPage = () => {
    

    return ( <div className="container">

    <div className={s.bg}>
    <h2 className={s.title}>Our team</h2>
    <div className={s.vector}></div>
    <ul className={s.conatctList}>
        <ContactsItem/>
    </ul>
    </div> 
    </div>);
}
 
export default ContactsPage;