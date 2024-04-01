export default function Leagues() {
  return (
    <div className="block75">
      <div id="Leagues" class="ml20 mr20">
        <h1>Legues</h1>
        <div>Upcoming International Tennis Leagues</div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>League</th>
                <th>Location</th>
                <th>Start Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wimbledon</td>
                <td>London, UK</td>
                <td>July 5, 2024</td>
              </tr>
              <tr>
                <td>French Open</td>
                <td>Paris, France</td>
                <td>May 26, 2024</td>
              </tr>
              <tr>
                <td>US Open</td>
                <td>New York, USA</td>
                <td>August 26, 2024</td>
              </tr>
              <tr>
                <td>Australian Open</td>
                <td>Melbourne, Australia</td>
                <td>January 20, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
