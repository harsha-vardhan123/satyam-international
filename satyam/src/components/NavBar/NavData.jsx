export const links = [
    { id:1,
        name: 'About Us',
        submenu: true,
        sublinks: [
        {
            sublink:[
                {
                    id:1, name:'About Us ', link:'/aboutus'
                },
                {
                    id:2,name:'Our Mission and Our Vision',link:'/ourvision'
                },
            ]
        }
    ] },
    { id:2, name: 'Academics' ,submenu:true,sublinks:[
        {
            sublink:[
                {
                    id:1,name:'Affiliation',link:"/affiliation"
                },
                {
                    id:2,name:'Curriculum',link:"/curriculum"
                },
                {
                    id:3,name:'Teaching Methodology',link:"/teachingmethodology"
                },
                {
                    id:4,name:'Theme based Learning',link:"/themebasedlearning"
                },
                {
                    id:5,name:'NCC Accrediation',link:"/nccaccrediation"
                },
            ]
        }
    ]  },
   
]