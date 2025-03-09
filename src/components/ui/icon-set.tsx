import { Link } from 'react-router-dom'

export default function IconSet() {

  const Icons = [
    {
      icon: "fa-brands fa-facebook",
      link: "https://www.facebook.com/profile.php?id=100073536213869",
      title: "My facebook account"
    },
    {
      icon: "fa-brands fa-github",
      link: "https://github.com/kxGeou",
      title: "My GitHub profile"

    },
    {
      icon: "fa-brands fa-instagram",
      link: "https://www.instagram.com/kxgeou/",
      title: "My Instagram account"
    },
    {
      icon: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/grzegorz-matusik-1016a3302",
      title: "My Linkedin account"
    },
    {
      icon: "fa-regular fa-envelope",
      link: "https://mail.google.com/mail/?view=cm&to=grzegorz.wfb@gmail.com",
      title: "My Gmail account"
    }
  ]

  return (
    <div className='text-[1.5rem] text-not-active flex gap-x-5 '>
      {Icons.map((icon, iconIndex) => (
        <Link key={iconIndex} to={icon.link} title={icon.title}> 
          <i className={`${icon.icon} transition-all duration-400 cursor-pointer hover:text-text`}></i>
        </Link>
      ))}
    </div>
  )
}
