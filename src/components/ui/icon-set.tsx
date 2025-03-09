import { Link } from 'react-router-dom'

export default function IconSet() {

  const Icons = [
    {
      icon: "fa-facebook",
      link: "https://www.facebook.com/profile.php?id=100073536213869",
      title: "My facebook account"
    },
    {
      icon: "fa-github",
      link: "https://github.com/kxGeou",
      title: "My GitHub profile"

    },
    {
      icon: "fa-instagram",
      link: "https://www.instagram.com/kxgeou/",
      title: "My Instagram account"
    },
    {
      icon: "fa-linkedin",
      link: "https://www.linkedin.com/in/grzegorz-matusik-1016a3302",
      title: "My Linkedin account"
    }
  ]

  return (
    <div className='text-[1.5rem] text-not-active flex gap-x-5 '>
      {Icons.map((icon, iconIndex) => (
        <Link key={iconIndex} to={icon.link} title={icon.title}> 
          <i className={`fa-brands ${icon.icon} transition-all duration-400 cursor-pointer hover:text-text`}></i>
        </Link>
      ))}
    </div>
  )
}
