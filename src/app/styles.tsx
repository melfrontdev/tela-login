'use client';
import styled  from 'styled-components';
import Image from 'next/image';
import { keyframes } from 'styled-components';
import Link from 'next/link';


const gradientAnimation = keyframes`
	0% { background-position: 0% 50%; }
	50% { background-position: 100% 50%; }
	100% { background-position: 0% 50%; }
`;

export const Container = styled.section`
	display: flex;
	overflow: hidden;
	width: 100%;
	height: 100vh;
`;

export const AreaCover = styled.div`
	flex: 1;
	height: 100%;
	align-items: center;
	display: flex;
	justify-content: center;
`;

export const AreaImage = styled.div`
	flex: 1;
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
`;

export const Cover = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const AreaForm = styled.div`
	flex: 1;
	background: linear-gradient(45deg, #aad3d4, #399ca0, #097579);
	background-size: 200% 200%;
	animation: ${gradientAnimation} 2s linear infinite;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ContentForm = styled.div`
	margin-top: 50px;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Form = styled.div`
	background: transparent;
	width: 417px;
	height: 526px;
	align-items: center;
	border-radius: 20px;
	align-items: center;
	flex-direction: column;
	display: flex;
	transition: 2s;
    border: solid 1px #a4e1e6;

	&:hover {
		transform: scale(1.1);
	}

	button {
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 31px;
		cursor: pointer;
		border-radius: 7px;
		color: #fff;
		background: linear-gradient(45deg, #aad3d4, #399ca0, #097579);
		background-size: 200% 200%;
		animation: gradientAnimation 4s linear infinite;
	}

	@keyframes gradientAnimation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;

export const Group = styled.div`
	margin-bottom: 1rem;
	width: 100%;

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-size: 1rem;
		transition: transform 0.3s ease-in-out;
	}

	input {
		width: 100%;
		height: 27px;
		text-indent: 9px;
		font-size: 1rem;
		border: 0;
		color: grey;
		background-color: transparent;
	}
`;

export const LinkForgot = styled(Link)`
	text-decoration: none;
	margin: 6px 0;
	color: #181717;
	font-size: 12px;
`;

export const AreaLogo = styled.div`
	width: 250px;
`;

export const Logo = styled(Image)`
	width: 100%;
	height: auto;
	object-fit: cover;
	margin-top: 10px;
`;

export const AreaInput = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 31px;
	text-indent: 9px;
	font-size: 1rem;
	border: 1px solid #166e85;
	border-radius: 4px;
`;

export const Areaicon = styled.div`
	display: flex;
	padding-left: 7px;
	align-items: center;
`;
