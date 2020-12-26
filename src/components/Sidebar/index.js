import React from 'react';
import { CloseIcon, SidebarContainer, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'
import Pdf from '../../documents/Chris Phillips Resume.pdf'

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='about' onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to='projects' onClick={toggle}>
						Projects
					</SidebarLink>
					<SidebarLink to='contact' onClick={toggle}>
						Contact
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute href={Pdf} target='_blank'>Resume</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;