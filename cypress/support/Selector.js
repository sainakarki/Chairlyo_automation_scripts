export const selectors = {
    //login page
    email: "/html/body/div/div/div/div[2]/div/form/div[1]/div[1]/div/input",
    login_password: "/html/body/div/div/div/div[2]/div/form/div[1]/div[2]/div/div/input",
    remember_me: "/html/body/div/div/div/div[2]/div/form/div[2]/div/label/input",
    login_btn: "/html/body/div/div/div/div[2]/div/form/button",
    //logout
    logout_btn: "/html/body/div[1]/div/div[1]/aside/div[3]/div/div[1]/div",
    logout_confirm_btn: "/html/body/div[3]/div[2]/button[2]",

  //organizattion
   menu_btn: '/html/body/div/div/div[1]/aside/div[1]/div/button/span/svg',
   organization_btn: "/html/body/div/div/div[1]/aside/div[2]/div/nav/div[2]/a",
   create_orgn_btn: "/html/body/div/div/div[2]/main/div/div[1]/div[1]/div[2]/button",
   organization_name: "/html/body/div/div/div[2]/main/div/div[2]/div/form/div/div/div[1]/div[1]/div[1]/div/input",
   organization_slug: "/html/body/div/div/div[2]/main/div/div[2]/div/form/div/div/div[1]/div[1]/div[2]/div/input",
   OrgStatus:"/html/body/div/div/div[2]/main/div/div[2]/div/form/div/div/div[1]/div[1]/div[3]/button",
   PlanType:"/html/body/div/div/div[2]/main/div/div[2]/div/form/div/div/div[2]/div[1]/div/button",
   OrgStatusActive:"/html/body/div[2]/div/div/div/div[3]/span[2]",
   PlantypeSuperPro:"/html/body/div[2]/div/div/div/div[9]/span[2]",
   crop_and_upload: "/html/body/div/div/div[2]/main/div/div[2]/div/form/div/div/div[1]/div[2]/div/div/div[1]/div[2]/button[2]",
   upload_images: "(//span[@class='inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors'])[1]",
   admin_fname: "/html/body/div/div/div[2]/main/div/div[2]/div/div/div/form/div[1]/div[1]/div/input",
   admin_lname: "/html/body/div/div/div[2]/main/div/div[2]/div/div/div/form/div[1]/div[2]/div/input",
   admin_email: "/html/body/div/div/div[2]/main/div/div[2]/div/div/div/form/div[1]/div[3]/div/input",
   admin_password: "(//input[@placeholder='•••••••••'])[1]",
   admin_phone: "(//input[@placeholder='Enter phone number'])[1]",
   save_changes_btn: "/html/body/div/div/div[2]/main/div/div[1]/div[2]/div/div/button[1]",
  //edit organization
  edit_org_by_orgname: "/html/body/div/div/div[2]/main/div/div[2]/div/div[1]/div/table/tbody/tr[1]/td[2]/div/a/div/span[1]",
  edit_org_btn: "/html/body/div/div/div[2]/main/div/div[2]/div[1]/div/div[1]/a",
  edit_org_name: "/html/body/div/div/div[2]/main/div/div[2]/div/form/div/div/div[1]/div[1]/div[1]/div/input",
  //delete organization
  delete_org_btn: "//button[normalize-space()='Remove Org.']",
  confirm_delete_btn: "//button[normalize-space()='Remove Organization']",
  //change plan type
  change_plan_btn: "//tbody/tr[1]//*[name()='svg']",
  plantypesuperpro: '/html/body/div[3]/form/div[2]/div/div[2]/button',
  
  //add users
  manage_users_btn: '/html/body/div/div/div[2]/main/div/div[2]/div[2]/div[1]/div[2]/a',
  add_user: "(//button[@type='button'][normalize-space()='Add User'])[2]",
  user_fname: '/html/body/div[3]/form/div[2]/div/div[1]/div[1]/div/input',
  user_lname: '/html/body/div[3]/form/div[2]/div/div[1]/div[2]/div/input',
  user_email: '//html/body/div[3]/form/div[2]/div/div[2]/div[1]/div/input',
  user_password: '/html/body/div[3]/form/div[2]/div/div[2]/div[2]/div/div/input',
  user_phone: "(//input[@placeholder='Enter phone number'])[1]",
  save_user_btn: '/html/body/div[3]/form/div[3]/button[2]',
  //url
  organization_body: "/html/body/div/div/div[2]/main",
  organization_url: "/html/body/div/div/div[2]/main/div/div[2]/div[2]/div[2]/div[2]",
}
