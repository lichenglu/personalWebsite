/**
 * Created by chengluli on 12/11/2016.
 */

import profileImg from '../../assets/profile.jpg';
import towerImg from '../../assets/tower.jpg';
import travelImg from '../../assets/travel.jpg';
import travelDetail1 from '../../assets/travel_detail1.jpg';
import travelDetail2 from '../../assets/travel_detail2.jpg';
import travelDetail3 from '../../assets/travel_detail3.jpg';

import ailingual from '../../assets/ailingual.png';
import codingPal from '../../assets/appIcon.png';
import alienRescue from '../../assets/alienRescue.png';
import star from '../../assets/star.png';

function CLConstance() {

    const routes = {

        home: '/',
        blogs: 'blogs',
        portfolio: 'portfolio'

    };

    return{

        placeholders: {
            navBarTitle: 'Chenglu Li',
        },

        staticData: {

            navItems: [
                {title: 'Home', url: routes.home, iconName:'home'},
                // {title: 'Blogs', url: routes.blogs, iconName:'tags'},
                {title: 'Portfolio', url: routes.portfolio, iconName:'briefcase'},
            ],

            routes: routes,

            homePages: [
                {
                    title: 'A Bit About Myself:',
                    content:'Hi! My name is Li Chenglu, a graduate student in Educational Technologies ' +
                    'at the University of Texas at Austin. I am an iOS & web developer, and am ' +
                    'actively seeking for a job for mobile and web development. Check out my portfolio ' +
                    'if you are interested!',
                    gradient: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
                    imgURL: profileImg,
                    id:'cl-home1'
                },

                {
                    title: 'iOS & Web Developer',
                    content:'What starts here changes the world',
                    gradient: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))',
                    imgURL: towerImg,
                    id:'cl-home2'
                },

                {
                    title: "Life 'Enjoyer'",
                    content:'Not only do I like sitting in front of my computer to explore the unknown, ' +
                    'but I also enjoy exploring things in real life. I speak three languages: Chinese, English ' +
                    'and Vietnamese. I have tried my best to leave my footage on as many places as possible',
                    gradient: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
                    imgURL: travelImg,
                    id:'cl-home3'
                }
            ],

            travelDetailView: [
                travelDetail1,
                travelDetail2,
                travelDetail3
            ],

            chartsData: {
                radar:  {
                    labels: ["Programmer", "Communicator", "Modeller", "Visualizer", "Rocker"],
                    datasets: [
                        {
                            label: "Strengths and Weaknesses",
                            fillColor: "rgba(220,220,220,0.5)",
                            strokeColor: "rgba(220,220,220,1)",
                            pointColor: "rgba(255,255,255,0.7)",
                            pointStrokeColor: "rgba(255,255,255,0.7)",
                            pointHighlightFill: "rgba(255,255,255,0.7)",
                            pointHoverBorderColor: "rgba(255,255,255,0.7)",
                            pointHighlightStroke: "rgba(220,220,220,1)",
                            data: [85, 80, 75, 50, 100]
                        }
                    ]
                },

                doughnut: [
                    {color:"#EF5138", highlight:"#EF5138", label:"Swift/Objective-C", value:3},
                    {color:"#C0324A", highlight:"#C0324A", label:"jQuery", value:1},
                    {color:"#61DAFB", highlight:"#61DAFB", label:"ReactJS & ReduxJS", value:3},
                    {color:"#DD0031", highlight:"#DD0031", label:"Angular2", value:1},
                    {color:"#61945D", highlight:"#61945D", label:"NodeJS & Express", value:1},
                ],

                bar: {
                    labels: ["Swift", "Objective-C", "JavaScript",
                        "Python", "iOS", "ReactJS", "ReduxJS", "Angular2"],
                    datasets: [
                        {
                            label: "StackOverview",
                            fillColor: [
                                "#EF5138", "#197BE4", "#C0324A",
                                "#F8C63D", "#6D6E71", "#61DAFB",
                                "#7C4EC2", "#DD0031",
                            ],
                            strokeColor: "rgba(220,220,220,0.2)",
                            highlightFill: [
                                "#EF5138", "#197BE4", "#C0324A",
                                "#F8C63D", "#6D6E71", "#61DAFB",
                                "#7C4EC2", "#DD0031",
                            ],
                            highlightStroke: "rgba(220,220,220,0.2)",
                            data: [100, 80, 85, 70, 85, 80, 80, 75]
                        },
                    ]
                }
            },

            portfolios: [
                {imgURL: ailingual, name: 'AILingual', description: '123'},
                {imgURL: star, name: 'STAR', description: '456'},
                {imgURL: alienRescue, name: 'Alien Rescue', description: '789'},
                {imgURL: codingPal, name: 'Coding Pals', description: 'rrr'},
            ],

            footer: {
                title: 'Contact ME',

                socialIcons: [
                    {iconURL:"fa fa-github fa-4x", name:'Github', link:'https://github.com/lichenglu'},
                    {iconURL:"fa fa-linkedin-square fa-4x", name:'LinkedIn', link:'https://www.linkedin.com/in/chenglu-li-445a2897'},
                    {iconURL:"fa fa-envelope-o fa-4x", name:'Email', link:'li.chenglu@utexas.edu', isEmail: true},
                ],
            }
        },

        styles: {
            ids: {
                navBar: 'CLNavBar',
                homePage: 'CLHome',
                charts:'CLCharts',
                footer:'CLFooter',
                portfolio: 'CLPortfolio',
            },

            classes: {
                fullPage: 'CLFullPage',
                hidden:'CLHidden',
                overlay: 'CLOverlay',
                centeredDiv: 'CLCenteredDiv',
                pageContentDiv: 'CLPageContent',
                portfolioCell: 'CLPortfolio-Cell',
                footerIcon: 'CLFooterIcon',
            },

            colors: {
                theme: 'rgba(0, 0, 0, 0.1)',
                defaultWhite: 'rgba(0, 0, 0, 0.5)',
            }
        }

    }
}

const constance = CLConstance();

export default constance;

