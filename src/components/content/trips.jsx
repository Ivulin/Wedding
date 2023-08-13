import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import tripImages from '../../asset/resource/tripImageList';
import './style.css';

const Trips = () => {

	return (
		<div className='inner-container scroll-y'>
			<div className='title'>
				<p>Výlety</p>
			</div>
			<div className='galery'>
				<Carousel variant='dark'>
					{tripImages.map(({ id, src, alt }) =>
						<Carousel.Item key={'carousel_trip_' + id}>
							<img id={'image_' + id}
								className="image-slide"
								src={"/images/trips/" + src}
								alt={alt}
							/>
						</Carousel.Item>)}
				</Carousel>
			</div>
			<div className='cards'>
				<Card>
					<Card.Body>
						<Card.Title>Bobová dráha MAISI FLITZER</Card.Title>
						<Card.Text>
							Délka bobové dráhy je 1,3km a jízda trvá asi 12minut a překonáte převýšení 280metrů.
							<Button className="pull-right" variant="primary" href='http://www.maiskogel.at/de/maisiflitzer/'>Více...</Button>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title>Burg Kaprun</Card.Title>
						<Card.Text>
							Hrad Kaprun je středověký hrad vybudovaný na kopci v obci Kaprun v rakouském Salcbursku.
							<Button className="pull-right" variant="primary" href='https://www.burg-kaprun.at/'>Více...</Button>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title>Baumzipfelweg</Card.Title>
						<Card.Text>
							Nejvyšší turistická stezka v korunách stromů v Evropě se nachází v údolí Saalbach Hinterglemm.
							<Button className="pull-right" variant="primary" href='https://www.baumzipfelweg.at/'>Více...</Button>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title>Golf Zell am See</Card.Title>
						<Card.Text>
							Jediné hřiště "LEADING GOLF COURSES" s 36 jamkami v Alpách.
							<Button className="pull-right" variant="primary" href='https://www.golf-zellamsee.at/de/'>Více...</Button>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title>Grossglockner Hochalpenstrasse</Card.Title>
						<Card.Text>
						Grossglocknerská vysokohorská silnice je již téměř 90 let jednou z nejmonumentálnějších památek Rakouska.
							<Button className="pull-right" variant="primary" href='https://www.grossglockner.at/gg/de/index'>Více...</Button>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title>Kitzsteinhorn vodní nádrže</Card.Title>
						<Card.Text>
							Vodní díla Wasserfallboden a Mooserboden u Kaprunu jsou úžasným místem, na kterém můžeme obdivovat fascinující technické a stavební provedení těchto přehrad.
							<Button className="pull-right" variant="primary" href='https://www.infoglobe.cz/tip-na-vylet/rakousko-kaprun-vysokohorske-prehrady-wasserfallboden-a-mooserboden/'>Více...</Button>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title>Kitzsteinhorn</Card.Title>
						<Card.Text>
							V lyžařské oblasti na ledovci Kitzsteinhorn začíná zima v říjnu a extrémně dlouhá lyžařská sezóna se stoprocentní zárukou sněhu sem přivádí milovníky lyžování až do pozdního jara.
							<Button className="pull-right" variant="primary" href='https://www.kitzsteinhorn.at/cz'>Více...</Button>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title>Rezort Tauern SPA</Card.Title>
						<Card.Text>
							Termální lázně a wellness v Zell am See. 
							<Button className="pull-right" variant="primary" href='https://www.tauernspakaprun.com/de'>Více...</Button>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title>Zell am See</Card.Title>
						<Card.Text>
							Zell am See je významné turistické centrum Rakouska
							<Button className="pull-right" variant="primary" href='https://www.infoglobe.cz/tip-na-vylet/rakousko-kaprun-vysokohorske-prehrady-wasserfallboden-a-mooserboden/'>Více...</Button>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title>Zeller See</Card.Title>
						<Card.Text>
							Zeller See je sladkovodní jezero v Rakouských Alpách. Své jméno dostalo po městě Zell am See, které se rozkládá při malé říční deltě, jež zasahuje do jezera.
							<Button className="pull-right" variant="primary" href='https://www.infoglobe.cz/tip-na-vylet/rakousko-kaprun-vysokohorske-prehrady-wasserfallboden-a-mooserboden/'>Více...</Button>
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}

export default Trips;