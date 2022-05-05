import StatusCard from 'components/StatusCard';
import SettingsForm from 'components/SettingsForm';
import ProfileCardB from 'components/ProfileCardB';
import Parent from 'components/Parent';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';

export default function Dashboard() {
    return (
        <>
            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
       
            </div>

            <div className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-6">
                        
                        <div className="xl:col-start-1 xl:col-end-7 px-4 mb-16 mt-14">
                            <ProfileCardB />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}