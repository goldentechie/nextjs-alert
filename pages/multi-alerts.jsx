import { Alert } from 'components';
import { alertService } from 'services';

export default MultiAlerts;

function MultiAlerts() {
    return (
        <div>
            <h1 className="mb-3">Next.js - Multiple Alerts</h1>
            <div className="row">
                <div className="col">
                    <Alert id="left-alert" />
                    <button className="btn btn-success m-1" onClick={() => alertService.success('Success!!', { id: 'left-alert' })}>Success</button>
                    <button className="btn btn-danger m-1" onClick={() => alertService.error('Error :(', { id: 'left-alert' })}>Error</button>
                    <button className="btn btn-info m-1" onClick={() => alertService.info('Some info....', { id: 'left-alert' })}>Info</button>
                    <button className="btn btn-warning m-1" onClick={() => alertService.warn('Warning: ...', { id: 'left-alert' })}>Warn</button>
                    <button className="btn btn-outline-dark m-1" onClick={() => alertService.clear('left-alert')}>Clear</button>
                </div>
                <div className="col">
                    <Alert id="right-alert" />
                    <button className="btn btn-success m-1" onClick={() => alertService.success('Success!!', { id: 'right-alert' })}>Success</button>
                    <button className="btn btn-danger m-1" onClick={() => alertService.error('Error :(', { id: 'right-alert' })}>Error</button>
                    <button className="btn btn-info m-1" onClick={() => alertService.info('Some info....', { id: 'right-alert' })}>Info</button>
                    <button className="btn btn-warning m-1" onClick={() => alertService.warn('Warning: ...', { id: 'right-alert' })}>Warn</button>
                    <button className="btn btn-outline-dark m-1" onClick={() => alertService.clear('right-alert')}>Clear</button>
                </div>
            </div>
        </div>
    );
}
