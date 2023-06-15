import { sBlockAcc, sDashboard, sDeleteAcc, sEnquiries, sQataNews, sReportedUser, sTrophies, sTrophyReq } from "../assets/icons/indext"

export const mockLogin = {
  title: 'Sign In',
  description: 'Enter your details to sign into your account'
}

export const mockResetPassword = {
  title: 'Reset Password',
  description: 'Enter your new password'
}

export const mockSendEmail = {
  title: 'Enter Email',
  description: 'Enter your email to reset your password'
}

export const sidebarMenu = [
  {
    pathName:'/',
    name: 'Dashboard',
    icon: sDashboard
  },
  {
    pathName:'/',
    name: 'Trophy Requests',
    icon: sTrophyReq
  },
  {
    pathName:'/',
    name: 'Trophies',
    icon: sTrophies
  },
  {
    pathName:'/',
    name: 'Block Accounts',
    icon: sBlockAcc
  },
  {
    pathName:'/',
    name: 'Delete Accounts',
    icon: sDeleteAcc
  },
  {
    pathName:'/',
    name: 'Qatapolt News',
    icon: sQataNews
  },
  {
    pathName:'/',
    name: 'Enquiries',
    icon: sEnquiries
  },
  {
    pathName:'/',
    name: 'Reported Users',
    icon: sReportedUser
  }
]