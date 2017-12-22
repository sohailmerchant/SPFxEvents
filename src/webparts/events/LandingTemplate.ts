import styles from './EventsWebPart.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

export default class LandingTemplate {
    public static templateHtml: string =  `
    <div class="${styles.events}">
    <table>
        <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Event Title</th>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <select name="" id="">
            <option value=""></option>
        </select>
        <div><input type="text" id="txtFullName"></div>
        <div><input type="text" id="txtEmail"></div>
        <div><input type="button" id="btnRegister" value="Register"></div>
        <div ng-show="{{vm.showevents}}">
            <table>
                <tr>
                    <th>Event Title</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Total Count</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <div><input type="text" id="txtName"></div>
            <div><input type="text" id="txtDate"></div>
            <div><input type="text" id="txtTime"></div>
            <div>
                <select name="" id="selCampus">
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                </select>
                <div><input type="button" id="btnNewEvent" value="Add Event"></div>
            </div>
        </div>
    </table>
</div>`;
}
