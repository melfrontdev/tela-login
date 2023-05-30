'use client';
import { useState } from 'react';
import {
	Container,
	AreaCover,
	AreaImage,
	Cover,
	AreaForm,
	ContentForm,
	Form,
	Group,
	LinkForgot,
	AreaLogo,
	Logo,
	AreaInput,
	Areaicon
} from './styles';
import control from '@/assets/images/control.png';
import gw from '@/assets/images/gw.png';
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import Control from '@/assets/images/Control.gif';
export default function Login(): JSX.Element {
	//const router = useRouter();

	/*const login = () => {
		router.push('/Home');
	};*/

	const [visiblePassword, setVisiblePassword] = useState(false);

	const viewPassword = () => {
		if (visiblePassword) {
			setVisiblePassword(false);
		} else {
			setVisiblePassword(true);
		}
	}; /* função de abrir e fechar o olho da passwore */

	return (
		<Container>
			<AreaCover>
				<AreaImage>
					<Cover src={Control} alt="" />
				</AreaImage>
			</AreaCover>
			<AreaForm>
				<Form>
					<AreaLogo>
						<Logo src={gw} alt="" />
					</AreaLogo>
					<ContentForm>
						<h3>Entre</h3>
						<Group>
							<label htmlFor="user">
								<h5>Usuário:</h5>
							</label>
							<AreaInput>
								<Areaicon>
									<FaUserCircle size={17} color="#043f3c" />
								</Areaicon>
								<input name="user" type="text" />
							</AreaInput>
						</Group>

						<Group>
							<label htmlFor="password">
								<h5>Senha:</h5>
							</label>
							<AreaInput>
								<Areaicon>
									<RiLockPasswordFill size={17} color="#043f3c" />
								</Areaicon>
								<input
									name="password"
									type={visiblePassword ? 'text' : 'password'}
								/>
								<Areaicon onClick={viewPassword}>
									{visiblePassword ? (
										<AiFillEye size={17} color="#043f3c" />
									) : (
										<AiFillEyeInvisible size={17} color="#043f3c" />
									)}
								</Areaicon>
							</AreaInput>
						</Group>
						<LinkForgot href="">Esqueceu a senha?</LinkForgot>
						<button>Entrar</button>
					</ContentForm>
				</Form>
			</AreaForm>
		</Container>
	);
}
