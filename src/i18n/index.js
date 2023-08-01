import {createI18n} from "vue-i18n";

const messages = {
    ru: {
        general: {
            callRequest: "Оставить заявку",
        },
        header: {
            links: {
                about: "О нас",
                services: "Услуги",
                cases: "Кейсы",
                contacts: "Контакты",
            },
        },
        mainPage: {
            hero: {
                line: "Всегда есть решение",
                headText: "рекламно-производственная компания",
                content: "Соединяя креатив и идеи, мы создаем и производим яркую историю вашего бренда",
                whyUs: {
                    header: "ПОЧЕМУ МЫ?",
                    first: "Широкий спектр услуг",
                    second: "Качество и скорость",
                    third: "Высокий уровень сервиса",
                    fourth: "Реклама под ключ",
                    fifth: "Гарантия на работы",
                },
            },
            about: {
                header: "О НАС",
                content: {
                    first: "Мы - рекламно-производственная компания.",
                    second: "Предоставляем комплексные решения рекламно-производственных задач под ключ.",
                    third: "Берем на себя и выполняем все обязательства по разработке проекта, дизайну, производству, логистике и монтажу рекламной продукции и торгового оборудования по всему Казахстану.",
                    fourth: "Мы предоставляем полный спектр рекламных услуг любой сложности и масштаба.",
                },
                blocks: {
                    first: "Собственная производственная база",
                    second: "Склады хранения",
                    third: "Высокотехнологичное оборудование",
                    fourth: "Высокий уровень сервиса",
                },
            },
            manufacture: {
                header: "наше оборудование и сервис",
                first: "Фрезерно-гравировальные станки",
                second: "Лазерные гравировальные станки",
                third: "UV печать",
                fourth: "Широкоформатная печать 1440 dpi",
                fifth: "Оборудование для работы с деревом и металлом",
                sixth: "Покраска",
                seventh: "Логистика, установка по всему Казахстану",
                block: {
                    first: "Собственный рекламно-производственный комплекс оснащен высокотехнологичным оборудованием.",
                    second: "Нестандартный подход, передовые технологии и строгий менеджмент.",
                    third: "Мы выстроили процессы, позволяющие с легкостью и вдохновением решать даже самые сложные задачи в кратчайшие сроки."
                }
            },
            services: {
                header: "УСЛУГИ",
                list: {
                    first: {
                        header: "ДИЗАЙН & РАЗРАБОТКА",
                        content:
                            "Разработка дизайна с нуля любой сложности. Адаптация, файлы для печати, технические файлы к производству.",
                    },
                    second: {
                        header: "НАРУЖНАЯ РЕКЛАМА",
                        content:
                            "Эффективная наружная реклама под ключ. Лайтбоксы, вывески, объемные буквы, крышные конструкции, неоновая реклама и прочее.",
                    },
                    third: {
                        header: "ВНУТРЕННЯЯ РЕКЛАМА",
                        content:
                            "Все виды внутренней рекламы. Стенды, световые короба, светодиодные и цифровые экраны, мобайлы, муляжи и прочее.",
                    },
                    fourth: {
                        header: "POSM МАТЕРИАЛЫ",
                        content:
                            "Привлекающие внимание и нестандартные POS материалы. OTC, навесные дисплеи, напольные дисплеи, шелфтокеры световые, стопперы и прочее.",
                    },
                    fifth: {
                        header: "ТОРГОВОЕ ОБОРУДОВАНИЕ",
                        content:
                            "Индивидуальный подход к торговому оборудованию. Бренд-зоны, shop-in-shop, endcap, торцы, пристенные модули, бренд шоп и прочее.",
                    },
                    sixth: {
                        header: "БРЕНДИНГ",
                        content:
                            "Выделение продукта различной сложности. Брендинг категории, торгового пространства, выделение продукта на полке, кассовая зона, входная группа и прочее.",
                    },
                    seventh: {
                        header: "КОММЕРЧЕСКАЯ МЕБЕЛЬ",
                        content:
                            "Полная упаковка офиса. Индивидуальное изготовление коммерческой мебели и оформление пространства.",
                    },
                    eighth: {
                        header: "ПРОИЗВОДСТВО МЕБЕЛИ",
                        content:
                            "Бренд зоны, стенды любой сложности и масштаба. Оформление и стилизация под бренд.",
                    },
                    ninth: {
                        header: "АРЕНДА ОБОРУДОВАНИЯ",
                        content:
                            "Аренда фото-зон, Pop Up стендов, Roll Up с заменой вижуалов и прочее.",
                    },
                },
                benefits: {
                    first: "Индивидуальный подход",
                    second: "Логистика и монтаж по всему Казахстану",
                    third: "Демонтаж и хранение оборудования",
                },
            },
            touch: {
                header: "НАШ ПОДХОД",
                first: {
                    header: "Разработка",
                    content: {
                        first: "дизайн",
                        second: "файлы для печати",
                        third: "технические файлы"
                    },
                },
                second: {
                    header: "Проектирование",
                    content: {
                        first: "технология",
                        second: "спецификация",
                        third: "конструктив"
                    },
                },
                third: {
                    header: "Производство и инсталляция",
                    content: {
                        first: "изготовление",
                        second: "доставка",
                        third: "монтаж"
                    },
                },
            },
            cases: {
                header: "кейсы"
            },
            team: {
                header: "КОМАНДА",
                first: {
                    name: "Юлия Склярова",
                    position: "Генеральный директор.",
                    experience: "Опыт в управлении 7 лет.",
                },
                second: {
                    name: "Александр Бычков",
                    position: "Учредитель компании.",
                    experience: "Опыт в развитии бизнеса 24 года.",
                },
                third: {
                    name: "Артем Цымбал",
                    position: "Главный технолог.",
                    experience: "Опыт в рекламе 14 лет.",
                },
                content: {
                    first:
                        "Высокий уровень менеджмента помогает принимать верные управленческие решения, разрабатывать новые технологии и решать задачи наших клиентов.",
                    second:
                        "Профессионализм специалистов на производстве помогает создавать качественные изделия и выдерживать сроки производства.",
                },
                button: "Профессиональный штат специалистов на производстве с опытом работы  от 10 лет и выше",
            },
            contacts: {
                header: "ДОВЕРЬТЕСЬ ПРОФЕССИОНАЛАМ!",
                content:
                    "Мы предлагаем Вам комплексный подход в решении задач в области разработки и производства рекламной продукции.",
                form: {
                    header: "Оставьте заявку",
                    content: "Мы свяжемся с Вами в ближайшее время",
                    direction: {
                        header: "Направление*",
                        placeholder: "Производство ПОСМ",
                        error: "Ввод направления не заполнен",
                    },
                    name: {
                        header: "Имя*",
                        placeholder: "Иван Иванов",
                        error: "Ввод имени не заполнен",
                    },
                    email: {
                        header: "Email*",
                        placeholder: "i.ivanov@gmail.com",
                        error: "Ввод email не заполнен",
                    },
                    phone: {
                        header: "Телефон*",
                        placeholder: "+7 (777) 777 77 77",
                        error: "Ввод телефона не заполнен",
                    },
                    note: {
                        header: "Краткое описание задачи",
                        placeholder: "Введите текст",
                        error: "",
                    },
                    button: "Отправить",
                },
            },
            footer: {
                address: {
                    header: "АДРЕС",
                    city: "г. Алматы",
                    street: "пр. Райымбека 417а/3",
                },
                contacts: {
                    header: "КОНТАКТЫ",
                    instagram: "Мы в Instagram",
                },
                phone: {
                    head: "Тел:"
                }
            },
        },
    },
    en: {
        general: {
            callRequest: "Leave a request"
        },
        header: {
            links: {
                about: "About Us",
                services: "Services",
                cases: "Cases",
                contacts: "Contacts"
            }
        },
        mainPage: {
            hero: {
                line: "There is always a solution",
                headText: "advertising production company",
                content: "By combining creativity and ideas, we create and produce a vibrant story for your brand",
                whyUs: {
                    header: "WHY CHOOSE US?",
                    first: "Wide range of services",
                    second: "Quality and speed",
                    third: "High level of service",
                    fourth: "Turnkey advertising solutions",
                    fifth: "Work guarantee"
                }
            },
            about: {
                header: "ABOUT US",
                content: {
                    first: "We are an advertising production company.",
                    second: "We provide comprehensive solutions for advertising and production tasks.",
                    third: "We take on and fulfill all obligations related to project development, design, production, logistics, and installation of advertising products and commercial equipment throughout Kazakhstan.",
                    fourth: "We offer a full range of advertising services of any complexity and scale."
                },
                blocks: {
                    first: "Own production base",
                    second: "Storage facilities",
                    third: "High-tech equipment",
                    fourth: "High level of service"
                }
            },
            manufacture: {
                header: "OUR EQUIPMENT AND SERVICES",
                first: "Milling and engraving machines",
                second: "Laser engraving machines",
                third: "UV printing",
                fourth: "Wide-format printing 1440 dpi",
                fifth: "Equipment for working with wood and metal",
                sixth: "Painting",
                seventh: "Logistics, installation throughout Kazakhstan",
                block: {
                    first: "Our advertising production complex is equipped with high-tech equipment.",
                    second: "We use innovative technologies and strict management.",
                    third: "We have established processes that allow us to easily and creatively solve even the most complex tasks in the shortest possible time."
                }
            },
            services: {
                header: "SERVICES",
                list: {
                    first: {
                        header: "DESIGN & DEVELOPMENT",
                        content: "Development of designs of any complexity. Adaptation, files for printing, technical files for production."
                    },
                    second: {
                        header: "OUTDOOR ADVERTISING",
                        content: "Effective outdoor advertising solutions. Lightboxes, signs, 3D letters, roof structures, neon signs, and more."
                    },
                    third: {
                        header: "INDOOR ADVERTISING",
                        content: "All types of indoor advertising. Stands, lightboxes, LED and digital screens, mobile stands, replicas, and more."
                    },
                    fourth: {
                        header: "POSM MATERIALS",
                        content: "Eye-catching and unconventional POS materials. OTC, hanging displays, floor displays, illuminated shelf talkers, stoppers, and more."
                    },
                    fifth: {
                        header: "COMMERCIAL EQUIPMENT",
                        content: "Individual approach to commercial equipment. Brand zones, shop-in-shop, endcap, end units, wall modules, brand shop, and more."
                    },
                    sixth: {
                        header: "BRANDING",
                        content: "Product differentiation of various complexity. Category branding, trade space branding, product differentiation on the shelf, checkout area, entrance group, and more."
                    },
                    seventh: {
                        header: "COMMERCIAL FURNITURE",
                        content: "Full office setup. Custom commercial furniture production and space design."
                    },
                    eighth: {
                        header: "FURNITURE PRODUCTION",
                        content: "Brand zones, stands of any complexity and scale. Branding and styling according to the brand."
                    },
                    ninth: {
                        header: "EQUIPMENT RENTAL",
                        content: "Rent of photo zones, Pop Up stands, Roll Up with visual replacement, and more."
                    }
                },
                benefits: {
                    first: "Individual approach",
                    second: "Logistics and installation throughout Kazakhstan",
                    third: "Equipment dismantling and storage"
                }
            },
            touch: {
                header: "OUR APPROACH",
                first: {
                    header: "Design",
                    content: {
                        first: "design",
                        second: "files for printing",
                        third: "technical files"
                    }
                },
                second: {
                    header: "Engineering",
                    content: {
                        first: "technology",
                        second: "specification",
                        third: "construction"
                    }
                },
                third: {
                    header: "Production and installation",
                    content: {
                        first: "manufacturing",
                        second: "delivery",
                        third: "installation"
                    }
                }
            },
            cases: {
                header: "Cases"
            },
            team: {
                header: "OUR TEAM",
                first: {
                    name: "Yulia Sklyarova",
                    position: "CEO",
                    experience: "7 years of management experience."
                },
                second: {
                    name: "Alexander Bychkov",
                    position: "Company Founder",
                    experience: "24 years of business development experience."
                },
                third: {
                    name: "Artem Tsymbal",
                    position: "Chief Technologist",
                    experience: "14 years of experience in advertising."
                },
                content: {
                    first: "A high level of management helps us make the right managerial decisions, develop new technologies, and solve our clients' tasks.",
                    second: "The professionalism of our production specialists helps create high-quality products and meet production deadlines."
                },
                button: "Professional team of specialists in production with 10+ years of experience"
            },
            contacts: {
                header: "TRUST PROFESSIONALS!",
                content: "We offer you a comprehensive approach to solving tasks in the field of development and production of advertising products.",
                form: {
                    header: "Leave a request",
                    content: "We will contact you shortly.",
                    direction: {
                        header: "Subject*",
                        placeholder: "POS Materials Production",
                        error: "Subject field is required"
                    },
                    name: {
                        header: "Name*",
                        placeholder: "John Doe",
                        error: "Name field is required"
                    },
                    email: {
                        header: "Email*",
                        placeholder: "j.doe@gmail.com",
                        error: "Email field is required"
                    },
                    phone: {
                        header: "Phone*",
                        placeholder: "+1 (123) 456 7890",
                        error: "Phone field is required"
                    },
                    note: {
                        header: "Brief task description",
                        placeholder: "Enter your message",
                        error: ""
                    },
                    button: "Send"
                }
            },
            footer: {
                address: {
                    header: "ADDRESS",
                    city: "Almaty",
                    street: "Raiymbeka Ave 417a/3"
                },
                contacts: {
                    header: "CONTACTS",
                    instagram: "Find us on Instagram"
                },
                phone: {
                    head: "Phone:"
                }
            }
        }
    },
    kz: {
        general: {
            callRequest: "Өтініш қалдыру"
        },
        header: {
            links: {
                about: "Біз туралы",
                services: "Қызметтер",
                cases: "Құрылғылар",
                contacts: "Байланыс"
            }
        },
        mainPage: {
            hero: {
                line: "Әрқашан шешім бар",
                headText: "реклама-өндіру компаниясы",
                content: "Креативті және идеяларды біріктіріп, сіздің брендіңіздің жарық тарихын жасайды және өндіреді",
                whyUs: {
                    header: "НЕ БІЗ?",
                    first: "Ұсынылатын қызметтердің әрекетті тізімі",
                    second: "Сапасы мен тездік",
                    third: "Жоғары қызмет деңгейі",
                    fourth: "Барлық рекламалық шешімдер",
                    fifth: "Жұмыс бойынша кепілдік"
                }
            },
            about: {
                header: "БІЗ ТУРАЛЫ",
                content: {
                    first: "Біз реклама-өндіру компаниясымыз.",
                    second: "Реклама және өндіру мәселелерін толық шешуді ұсынамыз.",
                    third: "Қазақстан бойынша рекламалық өндірістік мәселелердің барлығына жауап аламыз және оларды орындау үшін кешенді, дизайн, өндіру, логистика және ұстау жұмыстарын аламыз.",
                    fourth: "Біз кең салалы және өлшеміне тиісті рекламалық қызметтерді ұсынамыз."
                },
                blocks: {
                    first: "Өз өндіру базамыз",
                    second: "Сақтау қоймалары",
                    third: "Көтерімді техника",
                    fourth: "Жоғары қызмет деңгейі"
                }
            },
            manufacture: {
                header: "БІЗДІҢ ТЕХНИКА ЖӘНЕ ҚЫЗМЕТТЕРІМІЗ",
                first: "Фрезерлеу және ойындау машиналары",
                second: "Лазерлі ойындау машиналары",
                third: "UV басу",
                fourth: "Жоғары саптамалы басу 1440 dpi",
                fifth: "дерево және металлмен жұмыс жасау үшін техника",
                sixth: "Бояу",
                seventh: "Логистика, қазақстан бойынша орнату",
                block: {
                    first: "Біздің реклама-өндіру комплексіміз жоғары технологиялық құрылғалармен жабдықталған.",
                    second: "Біз жаңа технологияларды қолданамыз және кеңесші меңгеру.",
                    third: "Біз жеңіл уақыт ішінде ең кең түрде да жаңа, креативті міндеттерді шешу мүмкіндігін табу үшін процестерді құрдық."
                }
            },
            services: {
                header: "ҚЫЗМЕТТЕР",
                list: {
                    first: {
                        header: "ДИЗАЙН & ДАМЫТУ",
                        content: "Қиындықты барлық дизайны дамыту. Адаптация, басу үшін файлдар, өндіру үшін техникалық файлдар."
                    },
                    second: {
                        header: "СЫРТТЫ РЕКЛАМА",
                        content: "Эффективті сыртты реклама шешімдері. Жарықты тақталар, тақырыптар, 3D әріптер, шатты арнайы жабдықтар, неон реклама және тағы басқа."
                    },
                    third: {
                        header: "ІШКІ РЕКЛАМА",
                        content: "Ішкі рекламаның барлық түрлері. Тақталар, жарықты тақталар, LED және цифровые экрандар, мобайлар, жасырылған жабдықтар және тағы басқа."
                    },
                    fourth: {
                        header: "POSM МАТЕРИАЛДАР",
                        content: "Назар аударатын және жолдамалы POS материалдар. OTC, аспапты көрсеткіштер, жердегі көрсеткіштер, жарықты шелфтокерлер, стопперлер және тағы басқа."
                    },
                    fifth: {
                        header: "САТУ ЖҮЙЕСІ",
                        content: "Сату жүйесіне жеке түсініктеме. Бренд зоналары, shop-in-shop, endcap, тақырыптар, дейінді модульдер, бренд магазин және тағы басқа."
                    },
                    sixth: {
                        header: "БРЕНДТІКТЕУ",
                        content: "Көліктің кездесетіндігін қолдану. Санатты брендтеу, сауда жерінің брендтеуі, көліктің кездесетіндігін белгілеу, төлем жері, кірістің топтары және тағы басқа."
                    },
                    seventh: {
                        header: "САУДАЛЫ МЕБЕЛЬ",
                        content: "Офистің толық тиімді орнатуы. Жеке сауда мебелін жасау және мекенжайын дизайндау."
                    },
                    eighth: {
                        header: "МЕБЕЛЬ ӨНДІРУ",
                        content: "Бренд зоналары, барлық дәрежеде және өлшеміне арналған тақталар. Брендтіктеу және стилізациялау."
                    },
                    ninth: {
                        header: "ТЕХНИКА АРНАШУ",
                        content: "Фото зоналарды, Pop Up тақталарды, Roll Up жабдықтарды орнатумен жалғастыру."
                    }
                },
                benefits: {
                    first: "Жеке түсініктеме",
                    second: "Қазақстан бойынша логистика және орнату",
                    third: "Техникалық арнайылау және сақтау"
                }
            },
            touch: {
                header: "БІЗДІҢ ТӨРЕМІЗ",
                first: {
                    header: "Дамыту",
                    content: {
                        first: "дизайн",
                        second: "басу үшін файлдар",
                        third: "техникалық файлдар"
                    }
                },
                second: {
                    header: "Дизайн",
                    content: {
                        first: "технология",
                        second: "спецификация",
                        third: "конструктив"
                    }
                },
                third: {
                    header: "Өндіру және орнату",
                    content: {
                        first: "өндіріс",
                        second: "жеткізу",
                        third: "орнату"
                    }
                }
            },
            cases: {
                header: "ҚҰРЫЛҒЫЛАР"
            },
            team: {
                header: "БІЗДІҢ КОМАНДАМЫЗ",
                first: {
                    name: "Юлия Склярова",
                    position: "Бас директор.",
                    experience: "Менеджментте 7 жыл."
                },
                second: {
                    name: "Александр Бычков",
                    position: "Компанияның қалыптығы.",
                    experience: "Бизнесді дамыту 24 жыл."
                },
                third: {
                    name: "Артем Цымбал",
                    position: "Бас технолог.",
                    experience: "Рекламада 14 жыл."
                },
                content: {
                    first: "Жоғары деңгейдегі менеджмент мүмкіндіктерді ұсыну, жаңа технологияларды дамыту және клиенттеріміздің міндеттерін шешу арқылы көмектеседі.",
                    second: "Өндіру көмекшілеріміздің профессионализмі жоғары сапалы өнім жасауға және өндіру уақытын сақтауға көмектеседі."
                },
                button: "Өнімдеу жүйесінде 10+ жыл жұмыс төмендетілген профессионалдардың ұйымы"
            },
            contacts: {
                header: "МЫНАЙТЫНДЫЛАРҒА СЕЙІН",
                content: "Біз сізге рекламалық өнімдерді жобалау мен жасау алаңында жұмыс жасайтын бірдей қамтамасыз қызмет көрсетеміз.",
                form: {
                    header: "Өтініш қалдырыңыз",
                    content: "Біз сізбен жақын арада байланыс ала аламыз",
                    direction: {
                        header: "Бағыт*",
                        placeholder: "ПОСМ өнімі",
                        error: "Бағытты енгізу жоқ"
                    },
                    name: {
                        header: "Аты*",
                        placeholder: "Иван Иванов",
                        error: "Атын енгізу жоқ"
                    },
                    email: {
                        header: "Email*",
                        placeholder: "i.ivanov@gmail.com",
                        error: "Email енгізу жоқ"
                    },
                    phone: {
                        header: "Телефон*",
                        placeholder: "+7 (777) 777 77 77",
                        error: "Телефон нөмірін енгізу жоқ"
                    },
                    note: {
                        header: "Міндеттеме туралы қысқаша сипаттама",
                        placeholder: "Мәтінді енгізіңіз",
                        error: ""
                    },
                    button: "Жіберу"
                }
            },
            footer: {
                address: {
                    header: "МЕКЕНЖАЙ",
                    city: "Алматы қаласы",
                    street: "Райымбек көшесі 417а/3"
                },
                contacts: {
                    header: "БАЙЛАНЫС",
                    instagram: "Instagram-да біз"
                },
                phone: {
                    head: "Тел:"
                }
            }
        }
    }
};

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages,
});
