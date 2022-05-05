import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import Image from '@material-tailwind/react/Image';
import H5 from '@material-tailwind/react/Heading5';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import Button from '@material-tailwind/react/Button';
import ProfilePicture from 'assets/img/u2.jpg';

export default function ProfileCardB() {
    return (
        <Card>
            <div className="flex flex-wrap justify-center">
                
                <div className="w-full flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                            +200
                        </span>
                        <span className="text-sm text-gray-700">Students</span>
                    </div>
                    <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                            +300
                        </span>
                        <span className="text-sm text-gray-700">Ressources</span>
                    </div>
                    <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                            Many
                        </span>
                        <span className="text-sm text-gray-700">Teachers</span>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <H5 color="gray">
                <Icon name="account_balance" size="xl" />
                    El Fekir school</H5>
                <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <Icon name="place" size="xl" />
                     La Petite Ariana, Ariana, Tunisia                </div>
                
            </div>
            <CardBody>
                <div className="border-t border-lightBlue-200 text-center px-2 ">
                    <LeadText color="blueGray">
                        Welcome to the admin dashboard where you will be able to supervise and check how other users are interacting with the platform,
                        different statistics and analysis will be provided to you and account requests sent by both parents and teachers will be displayed to you
                        in which you can approve or deny their accounts, ratings section will contain feedback submitted from users in the form of rating.
                    </LeadText>
                </div>
            </CardBody>
            <CardFooter>
                <div className="w-full flex justify-center -mt-8">
                    <a
                        href="#pablo"
                        className="mt-5"
                        onClick={(e) => e.preventDefault()}
                    >
                        
                    </a>
                </div>
            </CardFooter>
        </Card>
    );
}
